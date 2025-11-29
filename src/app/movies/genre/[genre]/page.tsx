import { getGenres, getMoviesByGenre } from "@/lib/movies";
import { MovieCard } from "@/components/movie-card";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface GenrePageProps {
  params: { genre: string };
}

export async function generateStaticParams() {
  const genres = getGenres();
  return genres.map((g) => ({ genre: g.toLowerCase() }));
}

export function generateMetadata({ params }: GenrePageProps): Metadata {
  const genreName = params.genre;
  const pretty =
    genreName.charAt(0).toUpperCase() + genreName.slice(1).toLowerCase();
  return {
    title: `Best ${pretty} Movies`,
    description: `Top ${pretty.toLowerCase()} movies from the CineScope dataset.`
  };
}

export const revalidate = 60;

export default function GenrePage({ params }: GenrePageProps) {
  const genre = params.genre;
  const movies = getMoviesByGenre(genre);

  if (movies.length === 0) {
    return notFound();
  }

  const pretty =
    genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();

  return (
    <div className="container-page space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Best {pretty} Movies
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Programmatically generated playlist of the best{" "}
          {pretty.toLowerCase()} films from the dataset. These pages are
          another permutation of the same content, inspired by "Best Crime
          Movies", etc.
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
