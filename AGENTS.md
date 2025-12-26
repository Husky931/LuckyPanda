# AGENTS.md

## Project Overview

This is a Next.js (App Router) web application for a snack subscription box business.
The project includes a marketing website, subscription flows, and integrations with Shopify and Stripe.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Code Style & Conventions

- Use TypeScript everywhere
- Prefer server components unless client components are required
- Keep components small and composable
- Use Tailwind utility classes (no inline styles)
- Do not introduce new libraries without asking me first

## File & Folder Rules

- Do not rename or delete existing routes without asking me first
- Always ask me if you plan to make changes to `/app` routing structure
- Shared UI components live in `/app/components`
- Business logic should not be embedded directly in UI components

## Data & Integrations

- Do not hardcode API keys or secrets
- Use environment variables for all external services

## Content & Branding

- Brand tone: follow the current style, with red.primary as the main brand color
- Do not change copy, pricing, or branding without approval
- Images and assets should not be replaced unless explicitly requested

## What NOT To Do

- Do not change dependencies or config files unless asked
- Do not optimize prematurely, always ask first
- Do not assume business rules—ask if unclear

## How to Help Best

- Explain reasoning when making structural decisions
- If unsure, ask before acting
