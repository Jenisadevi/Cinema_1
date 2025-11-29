import { MetadataRoute } from "next";
import { getAllMovies, getGenres } from "@/lib/movies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example-cinescope.vercel.app";

  const movies = getAllMovies();
  const genres = getGenres();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/movies",
    "/movies/top-rated"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));

  const movieRoutes: MetadataRoute.Sitemap = movies.map((m) => ({
    url: `${baseUrl}/movies/${m.slug}`,
    lastModified: new Date()
  }));

  const genreRoutes: MetadataRoute.Sitemap = genres.map((g) => ({
    url: `${baseUrl}/movies/genre/${g.toLowerCase()}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...movieRoutes, ...genreRoutes];
}
