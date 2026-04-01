---
name: performance-gate-integrator
description: Define, implement, and enforce measurable performance gates in CI for design-system changes.
allowed-tools: [bash, read, write, edit, grep]
---

# Skill: Performance Gate Integrator

## Goal

Introduce measurable performance gates into CI and keep design-system changes within defined budgets.

## Apply When

- establishing performance governance,
- adding or tightening CI checks,
- introducing new components/tokens with runtime impact.

## Gate Categories

1. CSS footprint gate
2. Contract consistency gate
3. Accessibility quick gate
4. Regression signal gate (build/test + selected perf checks)

## Workflow

1. Define metric and threshold.
2. Define failure policy and ownership.
3. Integrate gate into CI.
4. Provide remediation playbook.
5. Track trend over time.

## Minimum Metrics

- generated design-system CSS size trend,
- contract drift incidents,
- accessibility gate failure rate,
- release-to-release regression count.

## Policy Rules

- unknown impact changes must be marked for follow-up measurement,
- budget exceptions must include explicit expiration and owner,
- repeated exceptions require threshold or architecture review.

## Reject Conditions

- threshold without remediation guidance,
- gate added without ownership,
- CI gate that cannot fail the build,
- performance claims without measured signal.

## Completion Evidence

- gate definition document,
- CI integration proof,
- first run result and trend baseline,
- owner and escalation path.
