# DDBJ Search Frontend

Frontend application for the DDBJ Search experience.

## Stack

- React 19
- TypeScript
- Vite 8
- TanStack Router
- TanStack Query
- HeroUI + Tailwind CSS 4
- Vitest
- Storybook 10
- Oxc (`oxlint` and `oxfmt`)

## Requirements

- Node.js `>=22.12.0 <23`
- pnpm `10.28.2`

## Getting started

```bash
pnpm install
pnpm dev
```

The main app runs on the default Vite dev server.

## Scripts

- `pnpm dev`: start the app
- `pnpm dev:msw`: start the app with Mock Service Worker enabled
- `pnpm build`: run the TypeScript build and create production assets
- `pnpm preview`: preview the production build locally
- `pnpm storybook`: start Storybook
- `pnpm build-storybook`: build the Storybook static bundle
- `pnpm test`: run the unit test project
- `pnpm test:storybook`: run the Storybook browser test project
- `pnpm test:all`: run all Vitest projects
- `pnpm lint`: run `oxlint`
- `pnpm lint:fix`: apply safe `oxlint` fixes
- `pnpm format`: format the repository with `oxfmt`
- `pnpm format:check`: verify formatting without writing changes
- `pnpm type-check`: run the TypeScript project build in no-emit mode
- `pnpm check-all`: run formatting, lint, type-check, and unit tests

## Before work

Run a preflight check before you start editing. This establishes whether the repository is already broken before your changes.

```bash
pnpm lint
pnpm test
pnpm type-check
```

## After a change

Run formatting after finishing your edits:

```bash
pnpm format
```

## Generated files

- Treat generated files as derived artifacts, not hand-authored source files.
- Do not hand-edit generated files unless the task is explicitly about generated output maintenance.
- If a source change requires regenerated output, commit the generated diff together with the source change.
- If a generated file was already broken before your task, report that state clearly instead of silently normalizing it.

## Verification

Use these commands before finishing a change:

```bash
pnpm lint
pnpm test
pnpm type-check
pnpm build
```

Compare the verification result with the preflight result so pre-existing failures are not confused with regressions introduced by the current task.

For Storybook-sensitive work, also run:

```bash
pnpm test:storybook
pnpm build-storybook
```

## Done criteria

A task is ready to hand off when all of the following are true:

- The requested change is implemented.
- Preflight results and final verification results are both understood, with pre-existing failures called out separately when needed.
- Formatting has been applied after editing.
- Required verification commands have been run for the scope of the change.
- Generated files, if any, were handled according to the generated-file policy.
- Related documentation was updated when the task changed contributor workflow or repository behavior.

## Project notes

- Routing is generated from file-based routes under `src/routes`.
- The app has two Vite HTML entrypoints: the main UI at `index.html` and the API reference page at `api-doc/index.html`.
- Path aliases are resolved through `vite-tsconfig-paths`. This remains enabled because the native Vite 8 resolver breaks TanStack Router split-route imports in this repo.
- `VITE_MSW=true` enables local mocking through MSW.

## Documentation

- [docs/spec.md](./docs/spec.md): library and framework choices
- [docs/naming-convention.md](./docs/naming-convention.md): naming rules
- [docs/note.md](./docs/note.md): implementation notes and edge cases
- [docs/development-guide.md](./docs/development-guide.md): local development workflow
