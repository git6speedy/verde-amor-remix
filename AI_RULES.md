# AI Editor Rules and Project Guidelines

This document outlines the technical stack and specific rules for maintaining consistency and quality within the project codebase..

## 1. Tech Stack Overview

The project is built using a modern, component-based architecture:

*   **Framework:** React (with TypeScript).
*   **Build Tool:** Vite.
*   **Styling:** Tailwind CSS for utility-first styling, ensuring responsive design by default.
*   **UI Library:** shadcn/ui (built on Radix UI primitives).
*   **Routing:** React Router DOM for client-side navigation.
*   **Data Management:** TanStack Query (React Query) for server state management and data fetching.
*   **Form Handling:** React Hook Form, paired with Zod for schema validation.
*   **Icons:** Lucide React.
*   **Localization:** Custom context-based solution (`src/contexts/LanguageContext.tsx`) using JSON files in `src/locales/`.
*   **Notifications:** Sonner for general toasts and the shadcn/ui Toast system for imperative notifications.

## 2. Code Structure and Conventions

*   **Source Directory:** All application code resides in the `src/` folder.
*   **Pages:** Top-level routes/views must be placed in `src/pages/`.
*   **Components:** Reusable components must be placed in `src/components/`.
*   **Hooks:** Custom hooks must be placed in `src/hooks/`.
*   **Utilities:** Helper functions and general utilities must be placed in `src/lib/` or `src/utils/`.
*   **File Naming:** Directory names must be all lower-case. Component files should use PascalCase (e.g., `Hero.tsx`).

## 3. Library Usage Guidelines

| Feature | Preferred Library/Tool | Rule |
| :--- | :--- | :--- |
| **UI Components** | shadcn/ui (from `src/components/ui`) | Always prioritize existing shadcn components. If customization is needed, create a new component wrapper instead of modifying files in `src/components/ui`. |
| **Styling** | Tailwind CSS | Use Tailwind classes exclusively for styling. Ensure all new components are responsive. |
| **Routing** | React Router DOM | Use for all navigation. Keep the main routing structure in `src/App.tsx`. |
| **Server State/Data Fetching** | TanStack Query (`@tanstack/react-query`) | Use for managing asynchronous data and caching. |
| **Forms & Validation** | React Hook Form + Zod | Use React Hook Form for form state and Zod for defining validation schemas. |
| **Icons** | Lucide React | Use icons from the `lucide-react` package. |
| **Notifications** | Sonner / shadcn Toast | Use Sonner for simple, non-blocking notifications. Use the shadcn Toast system (`useToast`) for actions requiring user interaction or persistent system messages. |
| **Localization** | `src/contexts/LanguageContext.tsx` | Use the `useLanguage` hook and `t` object for all text content. |
