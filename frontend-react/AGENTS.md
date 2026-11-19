# Staybnb

## Project direction

Staybnb will be an Airbnb-style accommodation app. The repository currently contains a starter, not the finished product. Car pages, authentication, chat, and admin examples are scaffolding, not confirmed product requirements. Do not treat existing examples as features to preserve or expand by default.

## Product constraints

- Always use one fixed demo user automatically. Do not build login, signup, logout, password, or authentication flows. Future frontend and backend work must use the same demo identity.
- Do not build a payment page, collect payment details, or integrate payment providers. Listing prices and booking totals may be displayed. Booking behavior will be specified separately.
- Do not infer additional product requirements from the Airbnb reference. Implement features when requested.

## Stack and conventions

- `frontend-react/`: React 18, Vite, React Router, Redux, and plain CSS. Follow existing page/component, service, and Redux action/reducer patterns.
- `backend/`: Node.js with ES modules, Express, MongoDB, and Socket.IO. Follow existing routes/controllers/services patterns.
- Keep changes focused on the requested task. Reuse existing helpers and installed dependencies before adding new ones. Avoid speculative features and abstractions.
- Distinguish starter behavior from intended product behavior when changing existing code. Preserve unrelated work.

## Commands and verification

Run commands from the indicated directory; there is no root package script.

| Directory | Command | Purpose |
| --- | --- | --- |
| `frontend-react/` | `npm run dev` | Start Vite using remote services by default. |
| `frontend-react/` | `npm run dev:local:mac` | Start Vite using local services on macOS/POSIX shells. |
| `frontend-react/` | `npm run build` | Build the frontend for production. |
| `frontend-react/` | `npm run lint` | Run ESLint without rewriting files. |
| `backend/` | `npm run dev` | Start the backend with nodemon. |

Neither package currently defines a test script. Starter READMEs may be inaccurate; check package scripts and implementation before relying on them.

For application changes, run relevant available checks and verify the affected behavior. Report checks that failed or could not run. Documentation-only changes require a content review, not application tests.
