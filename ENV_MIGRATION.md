# Environment Variables Migration (Waitlist / Newsletter)

The waitlist and newsletter forms now use a server-side API (`/api/waitlist`) instead of calling Google Sheets directly from the client. This keeps your API key secret.

## Required Changes

Add these **server-only** variables to your `.env`:

```
GOOGLE_SHEETS_SCRIPT_URL=<your Google Apps Script URL>
GOOGLE_SHEETS_API_KEY=<your API key>
```

You can reuse the same values from:

- `NEXT_PUBLIC_GOOGLE_SHEETS_PUBLIC_URL` → `GOOGLE_SHEETS_SCRIPT_URL`
- `NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY` → `GOOGLE_SHEETS_API_KEY`

The `NEXT_PUBLIC_*` variables are no longer needed for the waitlist/newsletter and can be removed to avoid exposing the key in the client bundle.
