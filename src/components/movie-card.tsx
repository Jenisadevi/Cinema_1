import { Movie } from "@/types/movie";
import Link from "next/link";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      href={`/movies/${movie.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60" />
        <div className="pointer-events-none absolute bottom-3 left-3 flex flex-col gap-1 text-xs text-slate-100">
          <span className="inline-flex items-center rounded-full bg-black/50 px-2 py-0.5 backdrop-blur">
            {movie.year} • {movie.genres.join(" · ")}
          </span>
          <span className="inline-flex items-center rounded-full bg-black/60 px-2 py-0.5 backdrop-blur">
            ⭐ {movie.rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 py-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
          {movie.title}
        </h3>
        <p className="line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
          Directed by {movie.director}
        </p>
        <div className="mt-auto flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>{movie.runtimeMinutes} min</span>
          <span>View details →</span>
        </div>
      </div>
    </Link>
  );
}
