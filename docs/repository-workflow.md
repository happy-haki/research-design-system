# Repository Workflow Policy

## Language

- All repository artifacts must be written in English.

## Branching and merge strategy

- `main` is protected and should only be updated via Pull Requests.
- Use short-lived feature branches (`feat/*`, `chore/*`, `docs/*`).
- Merge strategy: **Squash and merge only**.

## Pull Request requirements

- Include a concise summary and reasoning.
- Include validation evidence (`typecheck`, `test`, `build`).
- Keep PR scope coherent (single concern where possible).

## Recommended GitHub settings

1. Protect `main`.
2. Require pull request before merging.
3. Disable merge commit and rebase merge.
4. Enable squash merge.
5. Require status checks to pass before merging.
