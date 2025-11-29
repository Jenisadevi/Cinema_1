import { Metadata } from "next";
import { getTopRated } from "@/lib/movies";
import { MovieCard } from "@/components/movie-card";

export const metadata: Metadata = {
  title: "Top Rated Movies",
  description: "Best-rated movies in the CineScope directory."
};

export const revalidate = 60;

export default function TopRatedPage() {
  const movies = getTopRated(12);

  return (
    <div className="container-page space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Top Rated Movies
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          A handpicked selection of the highest-rated films in the dataset,
          sorted by rating. Use this as a quick “best of” playlist.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
