import { movies } from "@/data/movies";
import { Movie } from "@/types/movie";

export function getAllMovies(): Movie[] {
  return movies;
}

export function getMovieBySlug(slug: string): Movie | undefined {
  return movies.find((m) => m.slug === slug);
}

export function getGenres(): string[] {
  const set = new Set<string>();
  movies.forEach((m) => m.genres.forEach((g) => set.add(g)));
  return Array.from(set).sort();
}

export function searchMovies({
  query,
  genre,
  minRating,
  sortBy
}: {
  query?: string;
  genre?: string;
  minRating?: number;
  sortBy?: "rating-desc" | "year-desc" | "title-asc";
}): Movie[] {
  let result = [...movies];

  if (query && query.trim()) {
    const q = query.toLowerCase();
    result = result.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.director.toLowerCase().includes(q) ||
        m.cast.some((c) => c.toLowerCase().includes(q))
    );
  }

  if (genre && genre !== "all") {
    result = result.filter((m) =>
      m.genres.map((g) => g.toLowerCase()).includes(genre.toLowerCase())
    );
  }

  if (minRating) {
    result = result.filter((m) => m.rating >= minRating);
  }

  switch (sortBy) {
    case "rating-desc":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "year-desc":
      result.sort((a, b) => b.year - a.year);
      break;
    case "title-asc":
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }

  return result;
}

export function getTopRated(limit = 10): Movie[] {
  return [...movies].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getMoviesByGenre(genre: string): Movie[] {
  return movies.filter((m) =>
    m.genres.map((g) => g.toLowerCase()).includes(genre.toLowerCase())
  );
}
