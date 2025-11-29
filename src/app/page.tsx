import Link from "next/link";
import { getTopRated } from "@/lib/movies";
import { MovieCard } from "@/components/movie-card";

export const revalidate = 60;

export default function HomePage() {
  const topMovies = getTopRated(6);

  return (
    <div className="container-page space-y-10">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold tracking-wide text-slate-50 dark:bg-slate-100 dark:text-slate-900">
            🎬 CineScope · Movies & Shows Directory
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
            Explore iconic movies,
            <br />
            curated for film lovers.
          </h1>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">
            CineScope is a small but polished content directory showcasing
            critically acclaimed films. Browse by genre, rating, and year with a
            clean, modern UI built using the latest Next.js App Router,
            TypeScript, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/movies"
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-50 shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Browse all movies →
            </Link>
            <Link
              href="/movies/top-rated"
              className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-50 dark:hover:bg-slate-900"
            >
              View top-rated picks
            </Link>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Built as an intern assessment: App Router · SSG + ISR · TypeScript ·
            Tailwind · Dark mode · Vercel deployment.
          </p>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Featured this week
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {topMovies.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
            Dataset
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Curated list of iconic movies, inspired by public data sources such
            as TMDB and IMDb. Each movie includes genres, rating, year, runtime,
            director, and cast.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
            Tech stack
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Next.js App Router, TypeScript, Tailwind CSS, ISR (Incremental
            Static Regeneration), ESLint & Prettier, deployed on Vercel.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
            Design
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Clean, card-based layout with soft shadows, rounded corners, and
            dark mode — inspired by modern UI galleries from Dribbble and
            Awwwards.
          </p>
        </div>
      </section>
    </div>
  );
}
