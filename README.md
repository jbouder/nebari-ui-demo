# nebari-ui-demo

A React + TypeScript frontend application using the [Nebari design system](https://github.com/nebari-dev/nebari-design).

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 + Nebari design system (`@nebari/*` shadcn registry, light/dark mode)
- React Router v6
- TanStack Query v5
- Jotai (global state)
- Vitest + Testing Library
- Biome (format + lint + import sort)

## Commands

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build
npm run test         # Run tests
npm run test:coverage  # Tests with coverage
npm run check        # Biome: format + lint + organize imports
```

## Nebari design system

Components come from the `@nebari` shadcn registry (configured in `components.json`):

```bash
npx shadcn@latest add @nebari/button
npx shadcn@latest add @nebari/spinner
npx shadcn@latest add @nebari/theme
```

Browse available components: https://github.com/nebari-dev/nebari-design

See [AGENTS.md](./AGENTS.md) for full conventions and coding standards.
