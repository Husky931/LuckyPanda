# AGENTS.md

## Project Overview

This is a Next.js (App Router) web application for an ecommerce online shop for Chinese snacks.

## Tech Stack

Framework: Next.js 15 (App Router), TypeScript, Tailwind CSS
LLM: GPT-4o-mini (via OpenAI API)
Embeddings: OpenAI text-embedding-3-small
Chatbot: Vercel AI SDK (ai package)
RAG / Retrieval: LlamaIndex.TS
Database: Neon (PostgreSQL + pgvector extension)
Auth: Neon Auth (@neondatabase/toolkit)
PDF Parsing: pdf-parse (Node.js)
Payments: Stripe
ORM: Drizzle ORM
Package Manager: pnpm

## Code Style & Conventions

- Use TypeScript everywhere
- Server components preferred over client
- Do not introduce new libraries without asking me first

## File & Folder Rules

- Do not rename or delete existing routes without asking me first
- Shared UI components live in `/app/components`
- Business logic should not be embedded directly in UI components

## Data & Integrations

- Do not hardcode API keys or secrets

## Content & Branding

- Brand tone: follow the current design style, with primary-red as the main brand color

## What NOT To Do

- Do not change business rules without asking for permission first

## How to Help Best

- Explain reasoning when making structural decisions
- If unsure, ask before acting
