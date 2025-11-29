import { Metadata } from "next";
import { MovieFilters } from "@/components/movie-filters";

export const metadata: Metadata = {
  title: "All Movies",
  description:
    "Browse all movies in the CineScope directory with search, filters, and sorting."
};

export const revalidate = 60;

export default function MoviesPage() {
  return (
    <div className="container-page space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          All Movies
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Filter by genre, rating, and more. All results are generated
          programmatically from a static dataset and rendered with static
          generation plus incremental static regeneration.
        </p>
      </header>
      <MovieFilters />
    </div>
  );
}
