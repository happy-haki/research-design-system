# research-design-system

Research-driven design system monorepo built with **pnpm** and **Turborepo**.

## Goals

- Analyze mature design-system repositories and standards.
- Document common patterns and implementation methodology in `docs/`.
- Implement reusable packages in `packages/`.
- Align visual direction with the `multica/apps/web` style language (semantic tokens, calm surfaces, strong hierarchy).

## Workspace

- `packages/tokens`: DTCG-oriented token model and CSS variable generation.
- `packages/ui`: base UI layer with variant-driven components.
- `packages/config`: shared configuration artifacts.
- `docs`: research outcomes and implementation decisions.

## Commands

```bash
pnpm install
pnpm build
pnpm typecheck
pnpm test
```
