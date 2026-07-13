# ThreadHive Frontend — Agent Instructions

## Project Overview
React 19 + Vite learning project (Week 5 MLS assignment). Single-page app with manual view switching — no router installed. Assignment prompts are in [`threadhive-frontend/resources/prompts.md`](threadhive-frontend/resources/prompts.md).

## Commands
All commands run from `threadhive-frontend/`. Use `npm.cmd` on Windows PowerShell (avoids execution policy issues).

| Task | Command |
|------|---------|
| Dev server | `npm.cmd run dev` |
| Run tests | `npm.cmd test` |
| Build | `npm.cmd run build` |
| Install deps | `npm.cmd install` |

## Architecture

- **No router** — `App.jsx` uses `useState` + `onNavigate` prop to toggle between `<Login />` and `<Register />`
- **Component structure**: `src/components/ComponentName/ComponentName.jsx` + `ComponentName.css`
- **Page structure**: `src/pages/Section/Page.jsx` + shared `Auth.css`
- **Styling**: Per-component CSS files (plain CSS, not CSS Modules — use `className` strings, not `styles.foo`)
- **Forms**: Controlled components via `useState` + spread-update pattern: `setForm({...form, [e.target.name]: e.target.value})`

## Testing
- **Framework**: Vitest + React Testing Library + jsdom
- **Tests location**: top-level `tests/` folder (not `src/`)
- **Setup file**: `tests/setup.js` imports `@testing-library/jest-dom`
- **Config**: `vite.config.js` (doubles as vitest config with `test` key)
- **Label binding**: inputs need `id` attributes matching `htmlFor` on `<label>` for `getByLabelText` to work — `Register` has these, `Login` currently does not

## Key Files
- [`src/App.jsx`](threadhive-frontend/src/App.jsx) — root component, navigation state
- [`src/pages/Auth/Login.jsx`](threadhive-frontend/src/pages/Auth/Login.jsx) — controlled login form
- [`src/pages/Auth/Register.jsx`](threadhive-frontend/src/pages/Auth/Register.jsx) — controlled register form (reference implementation)
- [`src/components/Header/Header.jsx`](threadhive-frontend/src/components/Header/Header.jsx) — calls `onNavigate("Login" | "Register")`
- [`tests/auth.test.jsx`](threadhive-frontend/tests/auth.test.jsx) — auth tests (some are `//Todo` stubs)

## Conventions
- Functional components only, named exports via `export default`
- Props for cross-component communication (no global state/context yet)
- `console.log` used for form submit output (no backend API calls yet)
- `window.alert` used for success feedback in Login
