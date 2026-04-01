---
name: token-contract-enforcer
description: Enforce token schema integrity, semantic naming, compatibility, and usage mapping for design-system tokens.
allowed-tools: [bash, read, write, edit, grep]
---

# Skill: Token Contract Enforcer

## Goal

Keep design tokens stable, explicit, and performance-safe by enforcing schema, naming, and usage contracts.

## Apply When

- token domains are added or changed,
- semantic aliases are introduced,
- theme mappings are modified,
- token artifacts are regenerated.

## Required Inputs

- token source files,
- token schema expectations,
- current consumer mapping (which primitives consume which tokens).

## Required Outputs

1. Contract delta summary.
2. Schema conformance check result.
3. Token usage mapping update.
4. Risk assessment for naming and compatibility.

## Enforcement Checklist

1. Every token has explicit semantic intent.
2. Every token includes required contract fields.
3. Naming is deterministic and domain-scoped.
4. Added tokens have at least one intended consumer.
5. Removed/renamed tokens include migration notes.

## Performance Constraints

- Avoid token explosion without usage justification.
- Keep theme role mapping symmetric where possible.
- Avoid unstable naming that causes cache churn in generated CSS.

## Reject Conditions

- raw-value-first additions without semantic role,
- undocumented token removals,
- contract-breaking schema drift,
- token additions with no consumer plan.

## Completion Evidence

- contract check pass,
- generated artifact consistency,
- migration note (if breaking),
- updated token usage map.
