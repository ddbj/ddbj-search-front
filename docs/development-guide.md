# Development Guide

## Environment

- Use Node.js `>=22.12.0 <23`.
- Use the repository `packageManager` version: `pnpm@10.28.2`.
- Install dependencies with `pnpm install`.

## Daily workflow

1. Start the app with `pnpm dev`.
2. Use `pnpm dev:msw` when you need mocked API responses.
3. Run `pnpm storybook` when working on UI states, stories, or visual regressions.

## Quality tooling

This repository now uses Oxc as the default quality toolchain.

- `pnpm lint` runs `oxlint . --quiet`
- `pnpm lint:fix` runs `oxlint . --fix --quiet`
- `pnpm format` runs `oxfmt .`
- `pnpm format:check` runs `oxfmt --check .`

The formatter is intentionally Oxc-native. Import ordering follows Oxc canonical output instead of the previous ESLint or Prettier conventions.

## Before work

Run a preflight check before editing files so you can separate pre-existing failures from regressions introduced by the current task.

```bash
pnpm lint
pnpm test
pnpm type-check
```

## After a change

Run formatting after you finish editing files:

```bash
pnpm format
```

## Generated files

- Generated files are derived artifacts and should not be treated as hand-authored source files.
- Avoid editing generated files directly unless the task is specifically about generated output maintenance.
- When a source change requires regeneration, include the generated diff in the same change.
- If a generated file already has drift before you start work, report it explicitly instead of treating it as part of your task by default.

## Testing

### Required checks

Run these commands before completing a task:

```bash
pnpm lint
pnpm test
pnpm type-check
pnpm build
```

Compare this result with the preflight check. If something was already failing before the change, report it as pre-existing instead of treating it as a new regression.

## Done criteria

Use this checklist before handing work off:

- The requested change is implemented.
- Preflight and final verification results are both known.
- Pre-existing failures are separated from new regressions.
- Formatting has been applied after editing.
- Required checks for the task scope have been run.
- Generated files were handled according to the generated-file policy.
- Documentation was updated when the task changed repository behavior or contributor workflow.

### Additional checks for UI and Storybook work

- `pnpm test:storybook`: runs the Storybook Vitest project in browser mode
- `pnpm build-storybook`: verifies the Storybook production build

The Storybook test project currently uses Playwright through `@vitest/browser-playwright`. Keep that in mind when changing Storybook or browser-test configuration.

### `__TEST__` exports

- Prefer keeping pure helper logic in the same file as the component when that makes unit tests easier to maintain.
- Export those helpers through a `__TEST__...` object so tests can import them without widening the public surface more than necessary.
- When Oxc reports `react-refresh/only-export-components` for those test-only exports, add `eslint-disable-next-line react-refresh/only-export-components` with a short reason rather than moving logic out mechanically.
- Use the same exception only for intentional colocated helpers. If a helper is not test-only, prefer moving it into a nearby utility module when that improves clarity.

### Storybook preview decorators

- `.storybook/preview.tsx` may use `eslint-disable-next-line react-refresh/only-export-components` for framework-required decorators.
- Prefer this exception only in Storybook config entrypoints where the structure is imposed by Storybook rather than by app code design.

## Application structure

- `src/routes`: TanStack Router file-based routes
- `src/layout`: page-level layout components
- `src/features`: domain UI and supporting feature logic
- `src/api`: OpenAPI-related definitions and API types
- `src/fetch`: network fetchers and related helpers
- `.storybook`: Storybook configuration

## Build details

- `pnpm build` runs `tsc -b` before `vite build`.
- The Vite build emits both the main application and the API documentation entrypoint.
- `vite-tsconfig-paths` remains in place because the repo depends on alias resolution that still conflicts with TanStack Router split-route builds on Vite 8.

## When to run extra verification

- Run `pnpm test:storybook` after changing Storybook config, shared decorators, or story files.
- Run `pnpm build-storybook` after addon, framework, or builder changes.
- Run `pnpm dev:msw` after changing mocks, request flows, or empty/error states that depend on MSW.
