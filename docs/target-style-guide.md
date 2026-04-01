# Target Style Guide (Multica-aligned)

## Intent

This project targets a clean, modern, enterprise-ready visual language inspired by the `multica/apps/web` structure and tone.

## Visual principles

1. **Semantic surfaces first**
   - Drive UI from role-based tokens (`background`, `foreground`, `card`, `border`, `primary`) instead of one-off colors.

2. **Calm hierarchy**
   - Prefer strong typography and spacing rhythm over decorative effects.
   - Keep depth subtle and intentional.

3. **Predictable composition**
   - Components expose stable slots and variant contracts.
   - Class composition remains explicit and reusable.

4. **Theme-ready by default**
   - All core tokens support both light and dark contexts.
   - Component styles consume token variables only.

## Implementation mapping

- `packages/tokens/src/tokens.ts`: semantic light/dark token sets.
- `packages/tokens/src/css.ts`: `:root` and `.dark` CSS variable output.
- `packages/ui/src/styles.css`: token-driven primitives for surface/card/button.

## Expansion plan

- Add typographic scale tokens and motion tokens.
- Expand base primitives (input, field, dialog, menu, tooltip).
- Introduce docs playground to validate visual consistency at scale.
