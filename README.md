# research-design-system

Research-driven design system monorepo.

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

## Documentation map

- Architecture: `docs/architecture.md`
- Quick start: `docs/quick-start.md`
- Source analysis matrix: `docs/repository-analysis.md`
- Follow-up roadmap: `docs/follow-up-roadmap.md`
- Per-source research notes: `docs/research/*`

## Token usage

```ts
import "@research-ds/tokens/tokens.css";
import "@research-ds/ui/styles.css";
```

## Commands

- Install dependencies with the repository's configured package manager.
- Run workspace scripts for `build`, `typecheck`, and `test`.
