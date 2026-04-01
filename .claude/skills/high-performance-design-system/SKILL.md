---
name: high-performance-design-system-builder
description: Build and evolve a performance-focused design system with strict contracts, measurable budgets, CI gates, and staged rollout safety.
allowed-tools: [bash, read, write, edit, grep]
---

# Skill: High-Performance Design System Builder

## Purpose

Use this skill to design and implement a performance-focused design system through strict contracts, measurable budgets, and staged rollout.

This skill is optimized for agentic execution where consistency and verification matter more than speed-only output.

## When to Use

Use this skill when the task includes one or more of:

- creating or evolving token architecture,
- building primitive UI components,
- enforcing component/token contracts,
- introducing CI quality or performance gates,
- preparing design-system rollout plans.

## Inputs Required

1. Research and architecture context:
   - `docs/research-summary.md`
   - `docs/architecture.md`
   - `docs/implementation-methodology.md`
2. Target scope:
   - which packages/domains are in scope (`tokens`, `ui`, `config`, docs).
3. Delivery constraints:
   - release timeline,
   - compatibility constraints,
   - performance sensitivity.

## Progressive Disclosure

Keep this file as the orchestration layer. Move deep reference content to companion docs:

- `.claude/skills/README.md`
- `docs/high-performance-design-system-report.md`
- `docs/performance-governance-checklist.md`

## Outputs Required

You must produce all of the following:

1. A written contract delta (what contract changed and why).
2. Implementation changes (if requested) with clear file-level mapping.
3. Validation evidence:
   - typecheck,
   - tests,
   - build,
   - performance gate results if configured.
4. Rollout notes and risk summary.

## Execution Framework

### Phase 1 — Contract First

1. Define or update token contract before component edits.
2. Define or update component contract before style expansion.
3. Reject any implementation that introduces implicit contract drift.

### Phase 2 — Budget Awareness

For each change, explicitly state performance impact categories:

- CSS payload growth,
- runtime style complexity,
- primitive render path complexity,
- theme switching cost.

If impact is unknown, mark as **unverified** and add a validation task.

### Phase 3 — Layered Implementation

Implement in this order:

1. tokens contract,
2. token artifacts,
3. primitive contracts,
4. primitive implementation,
5. docs and governance updates.

Do not invert this order unless there is a blocking dependency.

### Phase 4 — Verification

Mandatory checks:

1. typecheck clean,
2. test pass,
3. build pass,
4. contract consistency check,
5. performance budget check (if defined for project).

### Phase 5 — Rollout Safety

Every meaningful change must include:

- migration note (if contract impact exists),
- rollback note,
- compatibility scope.

## Quality Bar (Must Pass)

Reject work that has any of the following:

- undocumented contract changes,
- unbounded variant expansion,
- direct raw-value styling in primitives where semantic token exists,
- no validation evidence.

## Task Templates

## Template A — Add/Update Token Domain

1. Define token schema update.
2. Map semantic intent.
3. Validate naming + compatibility.
4. Regenerate token artifacts.
5. Report contract + performance impact.

## Template B — Add Primitive Component

1. Create component contract.
2. Define variant matrix.
3. Bind semantic tokens.
4. Implement with minimal render complexity.
5. Add tests + accessibility checks.
6. Report budget impact.

## Template C — Introduce Performance Gate

1. Define what is measured.
2. Define threshold and failure policy.
3. Integrate into CI.
4. Add developer-facing remediation guidance.

## Reporting Format

Always report in this format:

1. **What changed**
2. **Why it changed**
3. **Contract impact**
4. **Performance impact**
5. **Validation evidence**
6. **Risk and rollback**

## Anti-Patterns

Never do the following:

- implement UI first and define contracts later,
- add tokens without usage path,
- add variants without state/accessibility definitions,
- merge changes without validation evidence,
- claim performance improvement without measurable signal.

## Success Criteria

A task is complete only when:

1. contracts are explicit,
2. budgets are respected or exceptions documented,
3. validations pass,
4. rollout and rollback notes exist,
5. docs remain coherent with implementation intent.

## Companion Skills

- `.claude/skills/token-contract-enforcer/SKILL.md`
- `.claude/skills/component-contract-author/SKILL.md`
- `.claude/skills/perf-gate-integrator/SKILL.md`
