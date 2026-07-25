import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Lees Labs Ltd",
  description: "Privacy policy for Lees Labs Ltd apps and websites.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Last updated: 25 July 2026</p>
      <p>
        Lees Labs Ltd (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
        operates mobile applications and this website. This policy explains what
        information we collect and how we use it.
      </p>

      <h2>Information we collect</h2>
      <p>Depending on the app or service, we may collect:</p>
      <ul>
        <li>Account or contact details you choose to provide</li>
        <li>Usage data, such as features used and basic device information</li>
        <li>Purchase or subscription information processed by Apple or Google</li>
        <li>Diagnostics and crash reports to improve reliability</li>
      </ul>

      <h2>How we use information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Provide and improve our apps and website</li>
        <li>Process purchases and subscriptions</li>
        <li>Respond to support requests</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with service
        providers who help us operate our apps (for example analytics, hosting,
        or payment processors), or when required by law.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep information only as long as needed for the purposes above, or as
        required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You can request access, correction, or deletion of your personal
        information by contacting us. Depending on your location, you may have
        additional rights under applicable privacy laws.
      </p>

      <h2>Children</h2>
      <p>
        Our apps are not directed at children under 13, and we do not knowingly
        collect personal information from them.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact Lees Labs Ltd via{" "}
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
