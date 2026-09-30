import { createServerFn } from "@tanstack/react-start";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwvKS2l1wfSeSvfJNxK7tsN8-n5iUImwmacIS4AGA89SuDpcfaDrgdG2G1lpRTJ1KR9yQ/exec";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const saveUpdateEmail = createServerFn({ method: "POST" })
  .validator((email: string) => {
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      throw new Error("Please add a valid email.");
    }
    return trimmed;
  })
  .handler(async ({ data }) => {
    const posted = await fetch(SHEET_URL, {
      method: "POST",
      redirect: "manual",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ email: data }),
      signal: AbortSignal.timeout(20000),
    });
    if (posted.status >= 300 && posted.status < 400) {
      return { ok: true as const };
    }
    const text = await posted.text();
    if (!posted.ok || !text.includes('"ok":true')) {
      throw new Error("sheet did not save the signup");
    }
    return { ok: true as const };
  });
