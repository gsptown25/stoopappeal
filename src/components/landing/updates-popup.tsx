import { useEffect, useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STORAGE_KEY = "stoop-updates";
const INBOX = "jade@stoopappeal.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function UpdatesPopup() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    const timer = window.setTimeout(() => setOpen(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  function remember(value: "dismissed" | "joined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage can be blocked */
    }
  }

  function close() {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "joined") {
        localStorage.setItem(STORAGE_KEY, "dismissed");
      }
    } catch {
      /* storage can be blocked */
    }
    setOpen(false);
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please add a valid email.");
      return;
    }
    setError(null);
    setSending(true);
    try {
      const body = new FormData();
      body.append("_captcha", "false");
      body.append("_subject", "Stoop Appeal — keep me updated");
      body.append("_template", "table");
      body.append("email", email.trim());
      body.append(
        "message",
        `${email.trim()} asked to be kept updated on future Stoop Appeal offerings.`,
      );
      const response = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      const result = (await response.json().catch(() => null)) as
        | { success?: boolean | string }
        | null;
      const sent =
        response.ok &&
        result != null &&
        (result.success === true || result.success === "true");
      if (!sent) throw new Error("mail failed");
      remember("joined");
      setDone(true);
    } catch {
      setError("We couldn't save that just now. Try again, or email Jade@stoopappeal.com.");
    } finally {
      setSending(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-ink/35"
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md rounded-lg bg-paper px-6 py-8 shadow-border sm:px-8 sm:py-10"
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 text-xs uppercase tracking-[0.16em] text-muted hover:text-ink"
        >
          Close
        </button>
        {done ? (
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
              You're on the list
            </p>
            <h2
              id={titleId}
              className="mt-2 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl"
            >
              We'll write when there's something new.
            </h2>
          </div>
        ) : (
          <>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
              Stay in touch
            </p>
            <h2
              id={titleId}
              className="mt-2 pr-10 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl"
            >
              The stoop changes with the year.
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
              Leave your email and we'll write when the next season arrives.
            </p>
            <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3">
              <label className="flex flex-col gap-1.5">
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                  Email
                </span>
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>
              {error ? (
                <p className="text-sm text-terracotta" role="alert">
                  {error}
                </p>
              ) : null}
              <Button type="submit" size="lg" disabled={sending} className="mt-1">
                {sending ? "Saving…" : "Keep me updated"}
              </Button>
              <button
                type="button"
                onClick={close}
                className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-ink"
              >
                Not now
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
