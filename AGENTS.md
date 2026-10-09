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


## Mandatory governance before app code
- Before implementing product behavior, check [core-scope](doc/product/core-scope.md). `CAP` entries are candidates, not approved features; do not decide `PROD-001`.. `PROD-010` silently.
- Follow [decision precedence and exception handling](doc/ai-governance/decision-policy.md).
- Define requirements first, then implement; record independent evidence in [quality gates](doc/development/quality-gates.md).
- Do not treat a workflow file as proof that GitHub branch protection has been enabled.
- Governance checks available **now**: `node --test tests/governance.test.mjs` and `node scripts/check-governance.mjs`. Run both when changing docs or workflows. App lint/build/E2E remain unavailable until scaffold.


## Current branch policy (D-013)
During initial development, `main` intentionally has **no mandatory branch protection or required approvals**. Do not propose enabling branch protection as a prerequisite for starting work. Existing checks are advisory; still run available verification and report failures honestly. Reconsider protection only when the project owner chooses to do so.


## MVP and master execution plan (D-014 to D-017)
Before any feature implementation read [MVP functional specification](doc/product/functional-specification.md), [master development plan](doc/development/master-plan.md) and only the relevant subsection of [open decisions](doc/product/open-decisions.md).
Confirmed MVP: Facebook-only login; mandatory WhatsApp and unique username to publish; public listings and storefronts; name, description, price, multi-image gallery; seller-owned edit/deactivate; anonymous contact via prefilled WhatsApp link. **No in-app cart, checkout or payments.**
**APPROVED:** username unique, initially immutable, 3–30 lowercase letters/digits/hyphen; required international-format WhatsApp number without SMS verification; 1–10 images/listing, original file ≤10 MiB and optimized WebP output; positive BOB price stored in integer cents; logical deactivation without permanent deletion (reactivation NOT part of MVP); WhatsApp preset message includes listing name and canonical URL. Do NOT classify these six requirements as pending. Image dimensions/quality, input formats, username edge-pattern, exact WhatsApp text, technical status names, detailed data schema and routes remain **PROPOSED**. Do not invent product behavior.


## P0 operation contracts
Consult [operation contracts](doc/product/contracts-mvp-v1.md) and [P0 closure criteria](doc/development/p0-contract-closure.md) before changing identity, listing, storefront or WhatsApp behavior. These contracts preserve approved requirements and explicitly list unapproved choices; proposed values are NOT implicit authorization.
