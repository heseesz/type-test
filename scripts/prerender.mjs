#!/usr/bin/env node
/**
 * Pre-renders each SPA route to static HTML for SEO.
 *
 * After `vite build`, this script:
 *  1. Starts a local static-file server serving the `dist/` directory.
 *  2. Uses Puppeteer to navigate to each route, waits for React to render
 *     (including all useEffect meta-tag updates), then captures the HTML.
 *  3. Saves each snapshot to `dist/<route>/index.html`.
 *
 * The resulting files are exactly what search-engine crawlers will see.
 * React hydration is unaffected because `createRoot` replaces the static
 * shell when the JS bundle loads in a real browser.
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  statSync,
} from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4174;
const BASE_URL = `http://localhost:${PORT}`;

// Routes that must have their own pre-rendered index.html
const ROUTES = ['/', '/teto-egen', '/attachment-style', '/narcissism'];

// Domains that are safe to block during pre-rendering (analytics / ads)
// so we don't accidentally timeout waiting for 3rd-party requests.
const BLOCKED_URL_PATTERNS = [
  'googlesyndication.com',
  'googletagmanager.com',
  'pagead2.googlesyndication.com',
  'doubleclick.net',
];

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

// ─── Static file server ───────────────────────────────────────────────────────

function startServer() {
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const pathname = decodeURIComponent(req.url.split('?')[0]);
      let filePath = join(DIST_DIR, pathname);

      // For paths without a file extension, try <path>/index.html first,
      // then fall back to the SPA root index.html.
      if (!extname(pathname)) {
        const subIndex = join(DIST_DIR, pathname, 'index.html');
        if (existsSync(subIndex)) {
          filePath = subIndex;
        } else {
          filePath = join(DIST_DIR, 'index.html');
        }
      }

      try {
        statSync(filePath); // throws if the file doesn't exist
        const content = readFileSync(filePath);
        const mimeType = MIME_TYPES[extname(filePath)] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.on('error', reject);
    server.listen(PORT, () => {
      console.log(`  Static server listening at ${BASE_URL}`);
      resolve(server);
    });
  });
}

// ─── Main pre-render routine ──────────────────────────────────────────────────

async function prerender() {
  console.log('\n🔍 Starting pre-render…\n');

  const server = await startServer();

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  try {
    for (const route of ROUTES) {
      console.log(`  Rendering ${route}`);

      const page = await browser.newPage();

      // Block analytics / ads to avoid slow or hanging network activity
      await page.setRequestInterception(true);
      page.on('request', (request) => {
        const url = request.url();
        if (BLOCKED_URL_PATTERNS.some((pattern) => url.includes(pattern))) {
          request.abort();
        } else {
          request.continue();
        }
      });

      await page.goto(`${BASE_URL}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 30_000,
      });

      // Wait for React to mount something inside #root
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return root && root.children.length > 0;
        },
        { timeout: 15_000 }
      );

      // Give useEffect hooks (including useMetaTags) time to run
      await new Promise((resolve) => setTimeout(resolve, 800));

      const html = await page.content();

      // Determine output directory
      const routePath = route === '/' ? '' : route;
      const outputDir = join(DIST_DIR, routePath);
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      const outputPath = join(outputDir, 'index.html');
      writeFileSync(outputPath, html, 'utf-8');
      console.log(`    → saved ${outputPath.replace(DIST_DIR, 'dist')}`);

      await page.close();
    }

    console.log('\n✅ Pre-render complete!\n');
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error('\n❌ Pre-render failed:', err);
  process.exit(1);
});
