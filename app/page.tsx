import { AppsAccordion, type AppEntry } from "./components/AppsAccordion";
import { SiteFooter } from "./components/SiteFooter";

const apps: AppEntry[] = [
  {
    id: "nighty",
    name: "Nighty — Sleep and Sound",
    icon: "/apps/nighty.jpg",
    iconAlt: "Nighty app icon",
    description:
      "A sound library to help you unwind and fall asleep — calming audio designed for better rest.",
  },
  {
    id: "fab",
    name: "fab",
    icon: "/apps/fab.png",
    iconAlt: "FAB app icon",
    status: "Coming soon",
    description:
      "A women's manifestation app — designed to help you set intentions, stay grounded, and bring what you want into focus.",
  },
  {
    id: "spill-it",
    name: "Spill It — Couples Questions",
    icon: "/apps/spill-it.png",
    iconAlt: "Spill It app icon",
    description:
      "A card game for couples. Draw a prompt, spill the truth, and deepen the conversation — one swipe at a time.",
    highlights: [
      "Top 100 Card Games in the UK on the App Store",
      "More than 10 million cards swiped",
    ],
  },
];

export default function Home() {
  return (
    <div className="page-bg flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16 sm:py-24">
        <header className="rise-in">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Lees Labs
          </h1>
        </header>

        <section className="rise-in rise-in-delay-1 mt-16" aria-labelledby="about-heading">
          <h2
            id="about-heading"
            className="font-display text-base tracking-wide text-muted"
          >
            About
          </h2>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-foreground/85">
            I&apos;m Isaac — here are the apps I&apos;ve built.
          </p>
          <p className="mt-4">
            <a
              href="https://www.linkedin.com/in/huanyoeilee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.95rem] font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              LinkedIn
            </a>
          </p>
        </section>

        <section className="rise-in rise-in-delay-2 mt-16" aria-labelledby="apps-heading">
          <h2
            id="apps-heading"
            className="mb-6 font-display text-base tracking-wide text-muted"
          >
            Apps
          </h2>
          <AppsAccordion apps={apps} />
        </section>

        <div className="rise-in rise-in-delay-3 mt-auto">
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
