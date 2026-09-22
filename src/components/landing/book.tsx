import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WEEKS = [
  "Week of September 28, 2026",
  "Week of October 5, 2026",
  "Week of October 12, 2026",
  "Week of October 19, 2026",
] as const;

const CITIES = [
  "Beaverton",
  "Canby",
  "Clackamas",
  "Forest Grove",
  "Happy Valley",
  "Hillsboro",
  "Lake Oswego",
  "McMinnville",
  "Milwaukie",
  "Newberg",
  "Oregon City",
  "Portland",
  "Sherwood",
  "Tualatin",
  "West Linn",
  "Wilsonville",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PACKAGES = [
  "The Gathering — $1,250",
  "The Harvest — $650",
] as const;

const BOOKING_INBOX = "jade@stoopappeal.com";

const STRIPE_LINKS: Record<string, string> = {
  "The Gathering — $1,250": "https://buy.stripe.com/14AdRbgJO1OU2Jz7j85Vu01",
  "The Harvest — $650": "https://buy.stripe.com/fZudRbalq2SY6ZP9rg5Vu00",
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  week: string;
  package: string;
  notes: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  week: "",
  package: "The Gathering — $1,250",
  notes: "",
};

export function Book() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (!form.name.trim()) {
      event.preventDefault();
      return setError("Please add your name.");
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      event.preventDefault();
      return setError("Please add a valid email.");
    }
    if (!form.phone.trim()) {
      event.preventDefault();
      return setError("Please add a phone number.");
    }
    if (!form.address.trim()) {
      event.preventDefault();
      return setError("Please add your street address.");
    }
    if (!form.city) {
      event.preventDefault();
      return setError("Please choose a city.");
    }
    if (!form.week) {
      event.preventDefault();
      return setError("Please choose an install week.");
    }
    if (!form.package) {
      event.preventDefault();
      return setError("Please choose a package.");
    }
    const checkout = STRIPE_LINKS[form.package];
    if (!checkout) {
      event.preventDefault();
      return setError("Please choose a package.");
    }

    setError(null);
    setSending(true);

    try {
      const existing = JSON.parse(localStorage.getItem("stoop-bookings") || "[]") as unknown[];
      localStorage.setItem(
        "stoop-bookings",
        JSON.stringify([...existing, { ...form, at: new Date().toISOString() }]),
      );
    } catch {
      /* preview storage can be unavailable */
    }
  }

  return (
    <section id="book" className="scroll-mt-32 bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
            Fall 2026
          </p>
          <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Reserve your week.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            Two packages, a limited number of stoops each week. Tell us about
            your entry — we'll confirm within one calendar day.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="uppercase tracking-[0.16em] text-muted">The package</dt>
              <dd className="mt-1 text-ink">
                The Gathering · $1,250
                <br />
                The Harvest · $650
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.16em] text-muted">Service area</dt>
              <dd className="mt-1 text-ink">
                Greater Portland Metro.
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.16em] text-muted">Questions</dt>
              <dd className="mt-1">
                <a
                  href="mailto:jade@stoopappeal.com"
                  className="text-ink underline decoration-line underline-offset-4 hover:text-terracotta"
                >
                  Jade@stoopappeal.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg bg-paper p-6 shadow-border sm:p-8 md:p-10">
          {submitted ? (
            <div className="flex min-h-80 flex-col justify-center">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
                You're on the list
              </p>
              <h3 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink">
                We'll be in touch within one calendar day.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                A note is on its way to confirm your package and install week.
                If anything about the stoop needs a second look, we'll ask for
                a photo then.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-8 w-fit"
                onClick={() => {
                  setForm(EMPTY);
                  setSubmitted(false);
                }}
              >
                Book another stoop
              </Button>
            </div>
          ) : (
            <form
              action={`https://formsubmit.co/${BOOKING_INBOX}`}
              method="POST"
              onSubmit={onSubmit}
              className="grid gap-4 sm:grid-cols-2"
              noValidate
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value={`New Stoop Appeal booking — ${form.package}`}
              />
              <input
                type="hidden"
                name="_next"
                value={STRIPE_LINKS[form.package] ?? ""}
              />
              <input
                type="hidden"
                name="message"
                value={[
                  `New booking from ${form.name.trim()}`,
                  `Email: ${form.email.trim()}`,
                  `Phone: ${form.phone.trim()}`,
                  `Address: ${form.address.trim()}`,
                  `City: ${form.city}`,
                  `Week: ${form.week}`,
                  `Package: ${form.package}`,
                  `Notes: ${form.notes.trim() || "—"}`,
                ].join("\n")}
              />
              <Field label="Full name" className="sm:col-span-1">
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder="Mara Quinn"
                />
              </Field>
              <Field label="Email" className="sm:col-span-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Phone" className="sm:col-span-1">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  placeholder="(503) 555-0148"
                />
              </Field>
              <Field label="Install week" className="sm:col-span-1">
                <Select
                  id="week"
                  value={form.week}
                  onChange={(value) => update("week", value)}
                  placeholder="Choose a week"
                  options={WEEKS}
                />
              </Field>
              <Field label="Package" className="sm:col-span-2">
                <Select
                  id="package"
                  value={form.package}
                  onChange={(value) => update("package", value)}
                  options={PACKAGES}
                />
              </Field>
              <Field label="Street address" className="sm:col-span-2">
                <Input
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  value={form.address}
                  onChange={(event) => update("address", event.target.value)}
                  placeholder="1842 NE 22nd Avenue"
                />
              </Field>
              <Field label="City" className="sm:col-span-2">
                <Select
                  id="city"
                  value={form.city}
                  onChange={(value) => update("city", value)}
                  placeholder="Choose a city"
                  options={CITIES}
                />
              </Field>
              <Field label="Notes for Jade" className="sm:col-span-2">
                <Textarea
                  id="notes"
                  name="notes"
                  value={form.notes}
                  onChange={(event) => update("notes", event.target.value)}
                  placeholder="Steps, pets, gate codes, a favorite pumpkin color…"
                />
              </Field>
              {error ? (
                <p className="sm:col-span-2 text-sm text-terracotta" role="alert">
                  {error}
                </p>
              ) : null}
              <div className="sm:col-span-2 mt-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={sending}>
                  {sending ? "Sending…" : "Book Now"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

function Select({
  id,
  value,
  onChange,
  placeholder,
  options,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: readonly string[];
}) {
  return (
    <select
      id={id}
      name={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="flex h-11 w-full rounded-md bg-cream px-3.5 text-sm text-ink shadow-border transition-[box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/30"
    >
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
