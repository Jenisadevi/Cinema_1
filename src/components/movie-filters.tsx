"use client";

import { getGenres, searchMovies } from "@/lib/movies";
import { Movie } from "@/types/movie";
import { useMemo, useState } from "react";
import { MovieCard } from "./movie-card";

const genres = ["all", ...getGenres()];

export default function MovieFilters() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState<
    "rating-desc" | "year-desc" | "title-asc"
  >("rating-desc");

  const filteredMovies: Movie[] = useMemo(
    () =>
      searchMovies({
        query,
        genre,
        minRating: minRating || undefined,
        sortBy
      }),
    [query, genre, minRating, sortBy]
  );

  return (
    <section className="mt-6 space-y-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
              Search by title, director, or cast
            </label>
            <input
              type="text"
              placeholder="e.g. Nolan, Matrix, DiCaprio..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-brand/30 focus:border-brand focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
            />
          </div>

          <div className="grid flex-none grid-cols-2 gap-3 md:w-[320px]">
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                Min rating
              </label>
              <select
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-brand/30 focus:border-brand focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
              >
                <option value={0}>Any</option>
                <option value={7}>7.0+</option>
                <option value={8}>8.0+</option>
                <option value={8.5}>8.5+</option>
                <option value={9}>9.0+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                Sort by
              </label>
              <select
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-brand/30 focus:border-brand focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as typeof sortBy)
                }
              >
                <option value="rating-desc">Rating (high → low)</option>
                <option value="year-desc">Year (new → old)</option>
                <option value="title-asc">Title (A → Z)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {genres.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGenre(g)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                genre === g
                  ? "border-slate-900 bg-slate-900 text-slate-50 dark:border-slate-50 dark:bg-slate-50 dark:text-slate-900"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              {g === "all" ? "All genres" : g}
            </button>
          ))}
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Showing <span className="font-semibold">{filteredMovies.length}</span>{" "}
          movie{filteredMovies.length !== 1 && "s"} matching your filters.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
