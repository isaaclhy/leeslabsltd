import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-20 text-sm text-muted">
      <span>© {new Date().getFullYear()} Lees Labs Ltd</span>
      <Link href="/support" className="transition-colors hover:text-foreground">
        Support
      </Link>
      <Link href="/terms" className="transition-colors hover:text-foreground">
        Terms of Use
      </Link>
      <Link href="/privacy" className="transition-colors hover:text-foreground">
        Privacy
      </Link>
    </footer>
  );
}
