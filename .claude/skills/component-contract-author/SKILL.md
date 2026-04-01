---
name: component-contract-author
description: Define and validate component contracts with clear API, variants, token dependencies, accessibility, and performance expectations.
allowed-tools: [bash, read, write, edit, grep]
---

# Skill: Component Contract Author

## Goal

Define and enforce component contracts that are token-driven, accessible, and performance-aware.

## Apply When

- introducing a new primitive,
- extending variants or slots,
- changing interaction behavior,
- changing token dependencies for a component.

## Contract Sections (Mandatory)

1. Public API (props + defaults)
2. Variant matrix (state/size/intent)
3. Slot model (`data-slot` expectations)
4. Accessibility guarantees
5. Token dependency table
6. Performance expectations

## Authoring Rules

- props must be typed and bounded,
- variants must have explicit semantic meaning,
- state behavior must be deterministic,
- styling must prefer semantic tokens over raw values.

## Performance Rules

- avoid hidden expensive effects in primitives,
- avoid unnecessary wrapper nesting,
- keep variant expansion controlled and justified.

## Validation Required

1. Contract completeness check.
2. Unit tests for key variant paths.
3. Accessibility sanity checks.
4. Build and typecheck pass.

## Reject Conditions

- variant added without contract update,
- undocumented slot behavior,
- missing accessibility behavior notes,
- token usage not mapped.

## Completion Evidence

- component contract document,
- tests and validation output,
- compatibility and rollback note.
