# Teto-Egen Personality Test Application

## Overview

This is a Korean personality test application that determines whether users align with "Teto" or "Egen" personality types. The application is built as a full-stack web application with a React frontend and Express backend, featuring a clean, modern UI with shadcn/ui components and Tailwind CSS styling.

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
- Dark mode support with system preference detection and manual toggle
- Theme persistence via localStorage

## Data Flow

1. **Application Start**: User lands on welcome screen
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
}
```

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
- June 27, 2025. Added navigation features (home button during test) and social sharing functionality with Web Share API
- June 27, 2025. Updated "에겐남" emoji to more positive representation (😊)
- June 27, 2025. Added randomized question and answer ordering using Fisher-Yates shuffle algorithm
- June 27, 2025. Added dark mode support with system preference detection and manual toggle
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.