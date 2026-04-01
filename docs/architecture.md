# Architecture Overview

## Monorepo topology

- Package manager: **pnpm**
- Task orchestrator: **Turborepo**
- Workspace scope: `packages/*`

## Package boundaries

### `@research-ds/tokens`

- Source-of-truth for semantic tokens.
- DTCG-aligned token object shape (`$value`, `$type`, optional metadata).
- Emits:
  - TypeScript token exports
  - Generated CSS variables (`tokens.css`) for runtime styling

### `@research-ds/ui`

- Primitive UI components built on token variables.
- Current baseline components: `Button`, `Card`.
- Variant composition strategy with typed props.

### `@research-ds/config`

- Shared TypeScript baseline extended by package configs.
- Keeps strictness and consistency centralized.

## Data flow

1. Token definitions are authored in `packages/tokens/src/tokens.ts`.
2. Token generator emits runtime CSS variables via `packages/tokens/src/css.ts`.
3. UI primitives consume those variables in `packages/ui/src/styles.css`.
4. Consumers import:
   - `@research-ds/tokens/tokens.css`
   - `@research-ds/ui/styles.css`

## Quality gates

- Type safety: `pnpm typecheck`
- Unit tests: `pnpm test`
- Package build verification: `pnpm build`
- CI enforces the same gates on pull requests.

## Near-term expansion

- Add consumer app scaffold (`apps/web`) to validate full integration path.
- Expand primitive catalog (input, field, dialog, menu, tooltip).
- Add visual regression and accessibility checks.
