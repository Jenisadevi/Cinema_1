"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Film } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "All Movies" },
  { href: "/movies/top-rated", label: "Top Rated" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-[var(--background)]/80 backdrop-blur dark:border-slate-800/80">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 shadow-soft dark:bg-brand/30">
            <Film className="h-5 w-5 text-brand-dark" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              CineScope
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Curated movies directory
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  active
                    ? "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
