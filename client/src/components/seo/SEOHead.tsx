import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

export function SEOHead({ 
  title,
  description, 
  canonical,
  noindex = false,
  children 
}: SEOHeadProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update robots meta tag
    let robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robotsContent);

    // Update language
    document.documentElement.setAttribute('lang', language);

    // Update title if provided
    if (title) {
      document.title = title;
    }

    // Update description if provided
    if (description) {
      let descMeta = document.querySelector('meta[name="description"]');
      if (!descMeta) {
        descMeta = document.createElement('meta');
        descMeta.setAttribute('name', 'description');
        document.head.appendChild(descMeta);
      }
      descMeta.setAttribute('content', description);
    }

    // Update canonical if provided
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

  }, [title, description, canonical, noindex, language]);

  return <>{children}</>;
}