import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/60 bg-[var(--background)] py-6 text-xs text-slate-500 dark:border-slate-800">
      <div className="container-page flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} CineScope. directory for an intern
          assessment.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://www.themoviedb.org/"
            className="underline-offset-4 hover:underline"
            target="_blank"
          >
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link
            href="https://vercel.com"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
          </Link>
        </div>
      </div>
    </footer>
  );
}
