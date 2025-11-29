export type MovieGenre =
  | "Drama"
  | "Crime"
  | "Action"
  | "Sci-Fi"
  | "Thriller"
  | "Adventure"
  | "Fantasy"
  | "Romance"
  | "Animation";

export interface Movie {
  id: number;
  slug: string;
  title: string;
  year: number;
  rating: number;
  genres: MovieGenre[];
  director: string;
  cast: string[];
  runtimeMinutes: number;
  posterUrl: string;
  backdropUrl?: string;
  tagline?: string;
  description: string;
}
