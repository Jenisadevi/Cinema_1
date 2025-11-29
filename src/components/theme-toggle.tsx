"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/60 text-slate-600 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
      aria-label="Toggle theme"
    >
      {current === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
