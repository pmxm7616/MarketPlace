# MarketPlace — agent instructions

MarketPlace is a reusable template for **independent** Bolivian marketplace websites, not a deployed app or a multi-tenant platform. The repository is currently in the documentation/planning stage.

## Always
- Read [doc/README.md](doc/README.md) for the project decision register; read only task-relevant detailed documents.
- Treat **agreed / proposed / pending / implemented** as distinct statuses. Do not invent completed features or settled product requirements.
- Prefer small, reviewable changes. For significant work, prepare a plan before coding.
- Do not introduce brand-specific business logic into the shared template.
- Never commit credentials, personal data, production configurations, or real customer data.
- Report actual commands run and results; never claim unexecuted checks passed.
- For code changes, add appropriate tests and document relevant behavior/decision changes.
- Preserve architecture boundaries and avoid unnecessary dependencies or infrastructure.
- Explain uncertainty and request a decision when the business model or security behavior is unspecified.

## Read based on the task
- Architecture/module boundaries: [doc/architecture/module-boundaries.md](doc/architecture/module-boundaries.md)
- Naming, TypeScript and API conventions: [doc/standards/README.md](doc/standards/README.md)
- Testing/acceptance: [doc/testing/testing-strategy.md](doc/testing/testing-strategy.md)
- Security: [doc/security/security-baseline.md](doc/security/security-baseline.md)
- AI task/review workflow: [doc/ai-governance/task-protocol.md](doc/ai-governance/task-protocol.md)
- Deployment/scaling: [doc/04-infraestructura-y-escalamiento.md](doc/04-infraestructura-y-escalamiento.md)
- Decisions and roadmap: [doc/README.md](doc/README.md), [doc/06-hoja-de-ruta.md](doc/06-hoja-de-ruta.md)

## Review invariants
- Reject unauthorized access, leakage of secrets or private data, unsafe uploads and broken tenant/site independence.
- Reject schema changes without migration and verification plan.
- Reject tests weakened or removed merely to pass checks.
- Reject unverifiable claims of successful builds, tests, security reviews or deployments.
- Flag public caching of personalized content and reliance on local filesystem/session state that blocks multi-instance operation.

## Verification
Until the application scaffold exists, commands and CI are **planned**, not executable. Once implemented, run the repository's documented lint, typecheck, test and build commands, plus focused checks for changed areas. Record skipped checks and reasons.

Code identifiers and comments: English. Product/architecture documentation: Spanish; preserve technical identifiers in English.
