"use client";

import { useState } from "react";

export function SupportForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-lg border border-line bg-surface px-4 py-5 text-foreground">
        Thanks — your message has been submitted. We&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y rounded-lg border border-line bg-surface px-3 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}
