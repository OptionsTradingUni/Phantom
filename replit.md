# Phantom Wallet Portfolio Screenshot Generator

## Overview

This is a web application that generates pixel-perfect screenshots of Phantom wallet portfolio interfaces. The application replicates the authentic Phantom wallet mobile experience with customizable cryptocurrency holdings, allowing users to create realistic portfolio visualizations showing various Solana-based tokens and their values.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** React with TypeScript running on Vite for fast development and optimized production builds.

**UI Component Library:** Utilizes shadcn/ui components (configured in `components.json`) built on top of Radix UI primitives. This provides accessible, customizable components following the "new-york" style preset with Tailwind CSS integration.

**Styling:** Tailwind CSS with extensive custom theme configuration including dark mode support and custom color schemes. The design system uses HSL-based colors with CSS variables for theming flexibility. Special attention to mobile-first responsive design with exact spacing to replicate the Phantom wallet interface.

**State Management:** TanStack Query (React Query) for server state management and data fetching, configured with specific defaults in `lib/queryClient.ts` to disable automatic refetching and set infinite stale time.

**Routing:** Wouter for lightweight client-side routing, chosen over heavier alternatives like React Router for simpler use cases.

**Screenshot Generation:** html2canvas library for capturing DOM elements and converting them to downloadable images.

**Component Structure:**
- Modular wallet components (`WalletHeader`, `BalanceDisplay`, `ActionButtons`, `TokenListItem`, `BottomNavigation`)
- Main composition component (`PhantomWallet`) that assembles the complete wallet interface
- Design follows reference-based approach for pixel-perfect Phantom wallet replication

### Backend Architecture

**Runtime:** Node.js with Express.js framework serving both API endpoints and static frontend assets.

**Build System:** 
- Frontend: Vite bundler with React plugin and TypeScript support
- Backend: esbuild for bundling server code into ESM format
- Development uses `tsx` for TypeScript execution without compilation

**Development vs Production:**
- Development mode uses Vite's middleware mode for HMR (Hot Module Replacement)
- Production serves pre-built static files from `dist/public`
- Replit-specific plugins integrated for development environment enhancements

**Server Configuration:**
- Express middleware for JSON parsing with raw body preservation
- Custom request/response logging for API routes
- HTTP server creation for potential WebSocket support

### Data Storage Solutions

**ORM:** Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript.

**Database Driver:** @neondatabase/serverless for PostgreSQL connectivity, optimized for serverless environments.

**Schema Management:**
- Schema defined in `shared/schema.ts` using Drizzle's table definitions
- Zod integration via `drizzle-zod` for runtime validation
- Migration files stored in `./migrations` directory
- Current schema includes basic user table with username/password fields (authentication scaffold)

**Storage Interface:** Abstracted storage layer (`server/storage.ts`) with:
- `IStorage` interface defining CRUD operations
- `MemStorage` in-memory implementation for development/testing
- Prepared for database-backed implementation swap

**Rationale:** The abstraction allows easy switching between in-memory and persistent storage without changing application logic. Drizzle was chosen for type-safe database queries and excellent TypeScript integration.

### External Dependencies

**UI Component Libraries:**
- **Radix UI**: Complete set of primitives for accessible components (accordion, dialog, dropdown, select, toast, tooltip, etc.)
- **shadcn/ui**: Pre-configured component implementations built on Radix
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant handling for component styling
- **tailwind-merge + clsx**: Utility for conditional className merging

**Form Handling:**
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolver integration
- **zod**: Schema validation library

**Date Manipulation:**
- **date-fns**: Lightweight date utility library
- **react-day-picker**: Calendar/date picker component

**Data Visualization:**
- **recharts**: Chart library for potential portfolio analytics
- **embla-carousel-react**: Carousel component for image galleries

**Developer Tools:**
- **@replit/vite-plugin-runtime-error-modal**: Runtime error overlay for Replit
- **@replit/vite-plugin-cartographer**: Code navigation for Replit
- **@replit/vite-plugin-dev-banner**: Development environment banner

**Session Management:**
- **connect-pg-simple**: PostgreSQL session store for Express
- **vaul**: Drawer component library

**Image Processing:**
- **html2canvas**: DOM-to-canvas conversion for screenshot generation

**Build Tools:**
- **PostCSS + Autoprefixer**: CSS processing pipeline
- **TypeScript**: Type safety across frontend and backend
- **esbuild**: Fast JavaScript bundler for production builds

**Deployment Configuration:**
- **Railway**: Platform-as-a-Service deployment target
- **Nixpacks**: Build system configuration for Railway deployment
- Configuration files: `railway.json`, `nixpacks.toml`

**Design Assets:**
- Token icons stored in `attached_assets` directory
- Custom Phantom wallet branding colors and styling
- Inter font family from Google Fonts