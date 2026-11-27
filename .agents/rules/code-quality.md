# Code Quality & General Development Rules

## Code Quality Principles

Follow these principles when writing and organizing code:

- **DRY (Don't Repeat Yourself):** Avoid duplicating logic. Extract common functionality when it is genuinely reusable.
- **SOLID Principles:** Apply SOLID principles where relevant to maintain modular, maintainable, and extensible code.
- **Single Responsibility:** Each component, function, and module should have a clear and focused responsibility.
- **Separation of Concerns:** Keep UI, business logic, data handling, and shared utilities appropriately separated.

## General Development Rules

- Use strict TypeScript typing. Avoid `any` unless absolutely necessary and explicitly justified.
- Follow existing project patterns before introducing new abstractions or dependencies.
- Keep components and modules small enough to understand and maintain.
- Avoid unnecessary dependencies and duplicate implementations.
- Do not introduce architectural changes without considering their impact on the existing codebase.
- Keep the architecture consistent as the project grows.
