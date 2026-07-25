import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — Lees Labs Ltd",
  description: "Terms of use for Lees Labs Ltd apps and websites.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>Last updated: 25 July 2026</p>
      <p>
        These Terms of Use govern your access to and use of apps and websites
        operated by Lees Labs Ltd (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;). By using our services, you agree to these terms.
      </p>

      <h2>Use of our services</h2>
      <p>
        You may use our apps and website only for lawful purposes and in
        accordance with these terms. You agree not to misuse our services,
        attempt to disrupt them, or access them in unauthorized ways.
      </p>

      <h2>Accounts and purchases</h2>
      <p>
        Some features may require an account or in-app purchase. Purchases and
        subscriptions made through the App Store or Google Play are subject to
        the terms of those platforms. Refunds are handled according to Apple or
        Google policies.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content, branding, and software in our apps and on this website are
        owned by Lees Labs Ltd or our licensors. You may not copy, modify, or
        redistribute them without our permission.
      </p>

      <h2>Disclaimer</h2>
      <p>
        Our services are provided &quot;as is&quot; without warranties of any
        kind. We do not guarantee that they will be uninterrupted, error-free, or
        meet your specific expectations.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Lees Labs Ltd is not liable for
        any indirect, incidental, or consequential damages arising from your use
        of our services.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of our
        services after changes means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent via{" "}
        <a
          href="https://www.linkedin.com/in/huanyoeilee/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
        >
          LinkedIn
        </a>
        .
      </p>
    </LegalPage>
  );
}
