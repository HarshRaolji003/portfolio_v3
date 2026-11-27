"use client";

import { useState, useRef, type FormEvent } from "react";
import { CONTACT_EMAIL } from "../data";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "pending" | "success" | "error";

/**
 * Contact form card with client-side validation, honeypot spam protection,
 * and accessible error/success states.
 *
 * TODO: Wire up actual form submission (Resend, Web3Forms, or other service).
 * Currently logs to console and shows a success state.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function validate(form: FormData): FormErrors {
    const errs: FormErrors = {};

    const name = (form.get("name") as string).trim();
    if (!name) errs.name = "Name is required.";

    const email = (form.get("email") as string).trim();
    if (!email) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }

    const message = (form.get("message") as string).trim();
    if (!message) {
      errs.message = "Message is required.";
    } else if (message.length > 2000) {
      errs.message = "Message must be under 2,000 characters.";
    }

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Honeypot check — silently ignore bot submissions
    if (form.get("_gotcha")) {
      setStatus("success");
      return;
    }

    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("pending");

    try {
      // TODO: Replace with actual form submission logic.
      // For now, simulate a short delay and succeed.
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("Contact form submitted:", {
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      });

      setStatus("success");
      formRef.current?.reset();
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  const isPending = status === "pending";

  return (
    <div className="rounded-lg border border-border-subtle bg-surface-elevated p-6 shadow-soft md:p-8">
      {status === "success" ? (
        <div aria-live="polite" className="py-4 text-center">
          <p className="font-sans text-body-lg font-semibold text-text-primary">
            Message sent!
          </p>
          <p className="mt-2 font-sans text-base text-text-secondary">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 rounded-sm px-4 py-2 font-sans text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          {/* Honeypot — hidden from humans */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="contact-gotcha">
              Do not fill this field
              <input
                id="contact-gotcha"
                name="_gotcha"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-name"
              className="font-sans text-sm font-medium text-text-primary"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              aria-invalid={errors.name ? "true" : undefined}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className="w-full rounded-md border border-border-subtle bg-background px-3 py-2 font-sans text-base text-text-primary placeholder:text-text-muted focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-ring/50"
              placeholder="Your name"
            />
            {errors.name && (
              <p
                id="contact-name-error"
                role="alert"
                className="text-small text-destructive"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-email"
              className="font-sans text-sm font-medium text-text-primary"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              aria-invalid={errors.email ? "true" : undefined}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
              className="w-full rounded-md border border-border-subtle bg-background px-3 py-2 font-sans text-base text-text-primary placeholder:text-text-muted focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-ring/50"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p
                id="contact-email-error"
                role="alert"
                className="text-small text-destructive"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-message"
              className="font-sans text-sm font-medium text-text-primary"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={2000}
              rows={5}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              className="w-full resize-y rounded-md border border-border-subtle bg-background px-3 py-2 font-sans text-base text-text-primary placeholder:text-text-muted focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-ring/50"
              placeholder="Tell me about the project or role…"
            />
            {errors.message && (
              <p
                id="contact-message-error"
                role="alert"
                className="text-small text-destructive"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-2.5 font-sans text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:opacity-50"
          >
            {isPending ? "Sending…" : "Send message"}
          </button>

          {/* Error status */}
          {status === "error" && (
            <div aria-live="polite" className="text-small text-destructive">
              <p>
                Something went wrong. Please try again or email me directly at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
