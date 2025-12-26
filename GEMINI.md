# Project Context: Lucky Panda Treats

## 1. Project Overview & Role

You are an expert developer specializing in NextJS.

- **Project Goal:** Landing page for a snack subscription box.
- **Audience:** Public end-users.

## 2. Tech Stack & Versions

- **Frontend:** Next.js (App Router), Tailwind CSS.
- **Backend:** currently none.
- **Database:** currently none.
- **State Management:** React Context.

## 3. Coding Standards & Conventions

- **Naming:** Use PascalCase for React components and camelCase for variables/functions.
- **Typing:** Strict TypeScript usage; avoid `any`. Use Python type hints for all functions.
- **Structure:** - Components go in `src/components/`.
    - API routes go in `/app/api/`.
    - Logic should be extracted into hooks or utility files, whereever possible.
- **Styling:** Use Tailwind CSS utility classes.

## 4. Operational Commands (Tool Use)

When you need to verify your work, use these commands:

- **Linting:** `npm run lint`
- **Testing:** `npm test` or `jest`
- **Build:** `npm run build`
- **Type Check:** `npx tsc --noEmit`

## 5. Rules & Boundaries

- ✅ **Always:** Paste the full error message (or a relevant snippet if truncated for length) before suggesting a solution or writing any code.
- ✅ **Always:** Explain your reasoning briefly before making large changes.
- ✅ **Always:** Run the relevant test command after modifying a file.
- ⚠️ **Ask First:** Before installing new npm or pip packages.
- ⚠️ **Ask First:** Before modifying global config files (like `tailwind.config.ts`).
- 🚫 **Never:** Remove existing comments or documentation.
- 🚫 **Never:** Use `force push` if you are asked to handle Git operations.

## 6. Project Structure Map

- `/app/components`: UI components.
- `/app/hooks`: Custom React hooks.
- `/docs`: Project documentation and API specs.
