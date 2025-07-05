# TypeTest - Personality Testing Platform

## Overview

TypeTest is a multilingual personality testing platform that hosts various psychological assessments. The flagship test is the Teto-Egen personality classification, originally a Korean dating and personality type system. The platform is designed to accommodate multiple tests with a scalable routing structure. Built as a full-stack web application with React frontend and Express backend, featuring a modern UI with shadcn/ui components and Tailwind CSS styling.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React hooks for local state management
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Korean design system
- **Build Tool**: Vite for development and production builds
- **Data Fetching**: TanStack Query (React Query) for server state management

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling
- **Storage**: In-memory storage implementation with interface for future database integration

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User authentication schema defined in `shared/schema.ts`
- **Current Implementation**: MemStorage class for development/testing
- **Production Ready**: PostgreSQL configuration available via DATABASE_URL

## Key Components

### Test Flow Components
1. **WelcomeScreen**: Gender selection interface with animated buttons
2. **TestScreen**: Question presentation with progress tracking, answer selection, and home navigation
3. **ResultScreen**: Personality type results with detailed descriptions, score breakdown, and social sharing

### Test Logic
- **Questions**: 12 personality assessment questions stored in `test-data.ts`
- **Random Ordering**: Questions and answer choices are shuffled for each test session using Fisher-Yates algorithm
- **Navigation**: Home button available during test for returning to welcome screen
- **Scoring**: Weighted scoring system for Teto vs Egen personality types
- **Sharing**: Social sharing functionality with Web Share API and clipboard fallback
- **Results**: Gender-specific result variations with custom descriptions and emojis

### UI Components
- Complete shadcn/ui component library implementation
- Custom Korean font integration (Noto Sans KR)
- Responsive design with mobile-first approach
- Gradient color scheme with custom Teto/Egen brand colors
- Dark mode support with system preference detection and manual toggle (top-right)
- Multi-language support (Korean/English/Spanish/Simplified Chinese/Traditional Chinese/Japanese) with dropdown selection (top-left)
- Theme and language persistence via localStorage
- Optimized UI layout with separated language and theme controls

## Site Architecture

### Routing Structure
```
/ - Main homepage with test selection
/teto-egen/ - Teto-Egen personality test
/[future-tests]/ - Additional tests as they are added
```

### Data Flow

#### Main Site Flow
1. **Landing Page**: User arrives at TypeTest homepage
2. **Test Selection**: User chooses from available personality tests
3. **Test Navigation**: User navigates to specific test route

#### Teto-Egen Test Flow
1. **Test Start**: User lands on Teto-Egen test page
2. **Gender Selection**: User selects gender, transitions to test screen
3. **Question Progression**: User answers questions sequentially with progress tracking
4. **Score Calculation**: Weighted scoring determines personality type
5. **Result Display**: Personalized results shown with restart option

### State Management Flow
```
TestState {
  screen: 'welcome' | 'test' | 'result'
  gender: 'male' | 'female' | null
  currentQuestion: number
  answers: number[]
  tetoScore: number
  egenScore: number
  finalResult?: 'teto_male' | 'egen_male' | 'teto_female' | 'egen_female'
}
```

### Meta Title Strategy
- Main site: "타입테스트" / "TypeTest"
- Teto-Egen test: "타입테스트: 테토-에겐 성향 테스트" / "TypeTest: Teto-Egen Personality Test"
- Dynamic updates based on current page and language

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React ecosystem with modern hooks
- **Component Library**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS processing
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns utility library

### Backend Dependencies
- **Database ORM**: Drizzle ORM with PostgreSQL driver
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod schema validation
- **Database Connection**: @neondatabase/serverless for cloud database

### Development Dependencies
- **Build Tools**: Vite for frontend, esbuild for backend
- **TypeScript**: Full type safety across the stack
- **Development Server**: Hot reload with Vite middleware integration

## Deployment Strategy

### Replit Configuration
- **Platform**: Replit autoscale deployment
- **Build Process**: `npm run build` compiles both frontend and backend
- **Production Start**: `npm run start` serves the compiled application
- **Port Configuration**: Internal port 5000 mapped to external port 80

### Build Process
1. Frontend builds to `dist/public` directory
2. Backend compiles with esbuild to `dist/index.js`
3. Static assets served from compiled frontend directory
4. Production server serves both API routes and static content

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment configuration (development/production)

## Changelog
- July 5, 2025. Added Adult Attachment Style Test with complete Korean/English/Japanese language support, 36 authentic research-based questions, four attachment types (Secure, Anxious, Avoidant, Fearful-Avoidant), real-time language switching during tests, and updated sitemap.xml with new /attachment-style route
- June 30, 2025. Added multilingual Contact Us feature with popup support across all 7 languages, providing typetest.site@gmail.com as contact email
- June 30, 2025. Added SEO optimization files: Created sitemap.xml with multilingual hreflang tags for both homepage and teto-egen test page, included robots.txt for efficient search engine crawling, configured for Google Search Console submission with proper priority and change frequency settings
- June 30, 2025. Updated privacy policy with comprehensive content: Added detailed information about Replit hosting, Google AdSense, Google Analytics usage, cookie policy, and contact information for privacy officer (typetest.site@gmail.com), ensuring full compliance with privacy regulations and AdSense requirements
- June 30, 2025. Added About Us component with multilingual support: Created AboutUs component supporting all 7 languages (Korean, English, Spanish, Chinese Simplified/Traditional, Japanese, Vietnamese), added "About Us | Privacy Policy" footer links to all pages with proper styling and modal popups
- June 30, 2025. Added comprehensive privacy policy implementation: Created PrivacyPolicy component with Korean privacy policy text and modal popup, integrated privacy policy links on all pages (home, welcome screen, test screen, result screen) at the bottom center, implemented full privacy policy compliance for AdSense requirements
- June 27, 2025. Optimized mobile UX: Added top padding (pt-20 on mobile) to prevent overlap with navigation controls, enhanced button touch targets with min-height and touch-manipulation CSS, improved responsive design for better mobile interaction
- June 27, 2025. Fixed social media sharing meta tags with Open Graph and Twitter Card support for proper link previews
- June 27, 2025. Implemented dynamic meta tag system using useMetaTags hook for page-specific SEO optimization
- June 27, 2025. Rebranded site to "TypeTest" (타입테스트) as a multi-test platform
- June 27, 2025. Restructured routing: main homepage at "/" and Teto-Egen test at "/teto-egen/"
- June 27, 2025. Added dynamic meta titles: "TypeTest: Teto-Egen Personality Test" format
- June 27, 2025. Created scalable test selection homepage with cards for current and future tests
- June 27, 2025. Implemented page-specific meta tag updates for better SEO
- June 27, 2025. Added Simplified Chinese (zh-cn) and Traditional Chinese (zh-tw) language support with complete translations
- June 27, 2025. Extended InfoPopup to support Chinese users with localized content explaining Teto-Egen personality types
- June 27, 2025. Added Chinese browser language detection (zh, zh-hans, zh-hant, zh-cn, zh-tw)
- June 27, 2025. Added Japanese (ja) language support with complete translations for all UI elements, questions, and results
- June 27, 2025. Extended InfoPopup to support Japanese users with localized content explaining Teto-Egen personality types  
- June 27, 2025. Added Japanese browser language detection
- June 27, 2025. Updated language toggle dropdown with JP option and 日本語 label
- June 27, 2025. Updated language toggle dropdown with CN/TW options and 中文(简体)/中文(繁體) labels
- June 27, 2025. Added Spanish language support with complete translations for all UI elements, questions, and results
- June 27, 2025. Extended info popup to support Spanish users with localized content
- June 27, 2025. Added info button for English/Spanish/Chinese users explaining Teto-Egen personality types with popup dialog
- June 27, 2025. Improved language toggle UI - moved to top-left with dropdown menu format showing language codes and names
- June 27, 2025. Implemented complete multi-language support (Korean/English/Spanish/Chinese) with automatic browser language detection
- June 27, 2025. Added navigation features (home button during test) and social sharing functionality with Web Share API
- June 27, 2025. Updated "에겐남" emoji to more positive representation (😊)
- June 27, 2025. Added randomized question and answer ordering using Fisher-Yates shuffle algorithm
- June 27, 2025. Added dark mode support with system preference detection and manual toggle
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.