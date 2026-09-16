# Stoop Appeal

Portland porch concierge landing page — one offering, the **Fall Harvest Deluxe**.

Built in Grok. This folder is the full site so you can keep it, edit it, or bring it back.

## If you just want a backup

Keep this zip. That is enough.

This Grok chat is also saved in your Grok history. Closing the window does not delete the project — reopen the same conversation to keep editing here.

## Bring it back into Grok

1. Open a new Grok **Build** chat (or this one, if it is still in your history).
2. Attach `stoop-appeal.zip` (or drop the unzipped folder).
3. Say something like: **Rebuild Stoop Appeal from these files. Keep the design, copy, photos, and logo.**

Grok will recreate the live preview from this source.

You can also **Publish** the app in Grok for a `*.grok.me` link that stays up even if you leave this chat. **Export to GitHub** is the other durable copy.

## Edit it on your computer

You need [Node.js 22](https://nodejs.org/) installed.

```bash
unzip stoop-appeal.zip
cd stoop-appeal
npm install
npm run dev
```

Then open the address it prints (usually `http://localhost:8080`).

The pages you will most likely change:

- Header / logo — `src/components/landing/header.tsx`, `src/components/landing/brand.tsx`
- Hero — `src/components/landing/hero.tsx`
- Package / price — `src/components/landing/services.tsx`
- About — `src/components/landing/about.tsx`
- Booking form — `src/components/landing/book.tsx`
- Photos — `public/images/`
- Logo mark — `public/images/logo-mark.png`
- Colors / fonts — `src/styles.css`

Bookings stay in the browser (`localStorage`) until you wire a real inbox.
