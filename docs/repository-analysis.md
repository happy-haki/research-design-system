# Repository Analysis Matrix

This matrix tracks extracted patterns and how they map into this repository.

| Source | Focus | Extracted Pattern | Applied in this repo |
| --- | --- | --- | --- |
| design-tokens/community-group | Token standardization | DTCG repository and charter emphasize a stable, extensible token format and cross-tool interoperability | `packages/tokens/src/types.ts`, `packages/tokens/src/tokens.ts` |
| mui/base-ui | Accessible primitive architecture | Unstyled, accessibility-first component primitives for custom design systems | `packages/ui` wrappers and variant composition |
| multica/apps/web | Visual system and app-level semantics | Feature-oriented app structure (`app`, `components`, `features`, `shared`) and polished semantic UI layering | Semantic light/dark tokens + restrained utility classes in `packages/ui/src/styles.css` |
| Dammyjay93/interface-design | System-memory process | Explicit decision memory and consistency governance (`.interface-design/system.md` pattern) | `docs/research-summary.md`, `docs/implementation-methodology.md` |
| sipe-team/side | Monorepo DS operations | pnpm workspace, Storybook docs, Vitest, release automation, and package-oriented structure | pnpm+turborepo mono setup + docs workflow + CI |
| cloudflare/kumo | Productized accessible DS | Base UI foundation, granular component imports, docs-first development, and CLI/documentation ergonomics | Split tokens/ui packages and future primitive expansion plan |
| daangn/seed-design | Large-scale DS ecosystem | Layered packages (definitions/base/react/integrations/docs) and mature ecosystem boundaries | `packages/tokens`, `packages/ui`, `packages/config` separation |

## Notes

- Detailed per-source notes live in `docs/research/*.md`.
- This matrix captures the implementation mapping after baseline adoption.
