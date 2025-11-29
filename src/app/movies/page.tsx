
import { getGenres, searchMovies } from "@/lib/movies";
import { Movie } from "@/types/movie";
import MovieFilters from "@/components/movie-filters";

export const revalidate = 86400; // optional ISR

type SearchParams = {
  q?: string;
  genre?: string;
  minRating?: string;
  sortBy?: string;
};

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // server-side filtering using your helpers
  const movies: Movie[] = searchMovies({
    query: searchParams.q ?? "",
    genre: searchParams.genre ?? "all",
    minRating: Number(searchParams.minRating ?? 0),
    sortBy: (searchParams.sortBy as any) ?? "rating-desc",
  });

  const genres = getGenres();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="container py-8 space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            Directory
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            All Movies
          </h1>
          <p className="max-w-xl text-xs text-slate-300">
            Browse a curated selection of movies. Use search, filters, and
            sorting to find your next watch.
          </p>
        </header>

        {/* Client component that renders filters + list */}
        <MovieFilters initialMovies={movies} genres={genres} />
      </div>
    </div>
  );
}
