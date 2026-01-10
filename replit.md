# Clean Fuel - Healthy Vending Solutions

## Overview

Clean Fuel is a landing page web application for a healthy vending machine company. The site showcases nutritious snacks and modern vending machines, allowing potential customers to learn about the company's mission and offerings. The application displays product catalogs for snacks and machines fetched from a PostgreSQL database, with a modern, animated user interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with a custom green/nature-themed design system
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth reveal effects and transitions
- **Smooth Scrolling**: react-scroll for navigation between sections

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript compiled with TSX for development
- **API Design**: RESTful endpoints under `/api/` prefix
- **Build System**: Custom build script using esbuild for server and Vite for client

### Data Layer
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains table definitions for snacks and machines
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # React components including shadcn/ui
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and query client
│   │   └── pages/        # Page components
│   └── public/       # Static HTML/CSS/JS fallback
├── server/           # Express backend
│   ├── db.ts         # Database connection
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route type definitions
└── migrations/       # Database migrations
```

### Key Design Decisions
1. **Monorepo Structure**: Client and server share TypeScript types through the `shared/` directory, ensuring type safety across the stack
2. **Storage Abstraction**: `IStorage` interface in `server/storage.ts` allows for easy testing and potential storage backend changes
3. **Component Library**: shadcn/ui provides accessible, customizable components without adding heavy dependencies
4. **Development Experience**: Vite HMR integration for fast frontend development, TSX for backend hot reloading

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express (available but sessions not currently implemented)

### Third-Party Services
- No external APIs currently integrated
- Email contact via `mailto:` links (no email service configured)

### Key NPM Packages
- **drizzle-orm / drizzle-kit**: Database ORM and migration tooling
- **@tanstack/react-query**: Async state management
- **framer-motion**: Animation library
- **react-scroll**: Smooth scrolling navigation
- **zod**: Runtime schema validation
- **Radix UI**: Accessible component primitives (via shadcn/ui)

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required for database operations)