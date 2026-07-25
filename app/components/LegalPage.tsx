import Link from "next/link";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
          {title}
        </h1>
        <div className="mt-8 space-y-5 text-[0.975rem] leading-relaxed text-muted [&_h2]:mt-8 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
        <footer className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-20 text-sm text-muted">
          <span>© {new Date().getFullYear()} Lees Labs Ltd</span>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms of Use
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
        </footer>
      </main>
    </div>
  );
}
