# Design System Research Summary

This document consolidates findings from requested reference repositories and standards, then maps them into implementation decisions for this monorepo.

## Sources

- https://github.com/sipe-team/side
- https://github.com/cloudflare/kumo
- https://github.com/daangn/seed-design
- https://github.com/design-tokens/community-group
- https://github.com/Dammyjay93/interface-design
- https://github.com/mui/base-ui
- https://github.com/multica-ai/multica/tree/main/apps/web

## Cross-cutting Patterns

1. **Token-first architecture**
   - Keep design decisions in token form, then project into platform outputs.
   - Prefer semantic tokens (`background`, `foreground`, `primary`) over raw palette usage.

2. **Primitive-to-wrapper layering**
   - Start from low-level accessible primitives, then add project-specific wrappers.
   - Keep behavior and visual concerns composable.

3. **Monorepo package boundaries**
   - Separate tokens, components, and shared config packages.
   - Use workspace orchestration (`pnpm`, `turbo`) for fast parallel execution.

4. **Variant-driven APIs**
   - Use predictable variant systems for component state and size.
   - Encode supported states in types.

5. **Documentation as system memory**
   - Store decisions, rationales, and constraints in docs.
   - Keep consistency rules explicit and reviewable.

## Source-specific Highlights

### design-tokens/community-group

- Use DTCG-style token contracts with explicit `$value` and `$type` metadata.
- Preserve extensibility via `$extensions` so tool-specific metadata is not lost.
- Prefer semantic groups and alias-friendly structures for long-term token evolution.

### mui/base-ui

- Keep component behavior accessible and unstyled at the primitive layer.
- Add project style opinions in wrappers rather than mutating primitive behavior.
- Use state/data attributes to bridge primitive state to styling systems.

### multica/apps/web (target visual direction)

- Favor semantic CSS variables and clean light/dark role mapping.
- Keep UI composition predictable with reusable class/variant helpers.
- Maintain calm surfaces and strong information hierarchy over decorative complexity.

### interface-design

- Treat docs as a durable decision log for visual language and constraints.
- Keep the system coherent by writing and reusing explicit style principles.

### sipe-team/side

- Monorepo with package + docs/storybook orientation.
- TypeScript-first component system with testing and release workflows.
- Strong signal for combining component docs, tests, and release discipline.

### cloudflare/kumo

- Accessible component system built on Base UI.
- Offers both top-level and granular imports, balancing DX and tree-shaking.
- Pairs component library development with docs and CLI ergonomics.

### daangn/seed-design

- Very large package ecosystem across definitions, base CSS, headless/react packages, and integrations.
- Clear separation between foundational definitions and framework-specific delivery.
- Confirms the value of explicit package boundaries for long-term scaling.

## Initial Implementation Decisions

- Token schema follows DTCG-style fields (`$value`, `$type`, optional metadata).
- CSS variables are generated from tokens as `--rds-*` names with `:root` + `.dark` layers.
- UI components expose `data-slot` and typed variant props.
- Semantic color + spacing + radius tokens are defined before component expansion.

## Visual Direction (Multica-inspired)

- Calm neutral surfaces, semantic color roles, strong typographic hierarchy.
- Light-first theme with dark-mode-ready token strategy.
- Composition-friendly layout primitives and restrained motion.

## Deferred Items

- Full automated token transform pipeline for multiple targets.
- Advanced primitive catalog (popover, combobox, field composition).
- Storybook/docs app with live playground.
