import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SupportForm } from "../components/SupportForm";

export const metadata: Metadata = {
  title: "Support — Lees Labs Ltd",
  description: "Get in touch with Lees Labs Ltd for app support.",
};

export default function SupportPage() {
  return (
    <div className="page-bg flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Lees Labs
        </Link>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
          Support
        </h1>
        <p className="mt-3 max-w-prose text-muted">
          Have a question or need help with one of our apps? Send us a message. Or
          email{" "}
          <a
            href="mailto:isaac@leeslabsltd.com"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            isaac@leeslabsltd.com
          </a>{" "}
          for a quicker response.
        </p>
        <div className="mt-8">
          <SupportForm />
        </div>
        <SiteFooter />
      </main>
    </div>
  );
}
