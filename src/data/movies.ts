import { Movie } from "@/types/movie";

export const movies: Movie[] = [
  {
    id: 1,
    slug: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genres: ["Drama"],
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman"],
    runtimeMinutes: 142,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/xBKGJQsAIeweesB79KC89FpBrVr.jpg",
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    description:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison."
  },
  {
    id: 2,
    slug: "the-godfather",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genres: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino"],
    runtimeMinutes: 175,
    posterUrl: "https://image.tmdb.org/t/p/w342/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    tagline: "An offer you can't refuse.",
    description:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Corleone crime family."
  },
  {
    id: 3,
    slug: "the-dark-knight",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger"],
    runtimeMinutes: 152,
    posterUrl: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    tagline: "Why so serious?",
    description:
      "Batman raises the stakes in his war on crime, facing the Joker, a criminal mastermind."
  },
  {
    id: 4,
    slug: "inception",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genres: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    runtimeMinutes: 148,
    posterUrl: "https://image.tmdb.org/t/p/w342/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    tagline: "Your mind is the scene of the crime.",
    description:
      "A thief who steals corporate secrets through dream-sharing is given a chance at redemption."
  },
  {
    id: 5,
    slug: "pulp-fiction",
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    runtimeMinutes: 154,
    posterUrl: "https://image.tmdb.org/t/p/w342/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
    tagline: "Just because you are a character doesn't mean you have character.",
    description:
      "The lives of two mob hitmen, a boxer, and others intertwine in tales of violence and redemption."
  },
  {
    id: 6,
    slug: "interstellar",
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway"],
    runtimeMinutes: 169,
    posterUrl: "https://image.tmdb.org/t/p/w342/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 7,
    slug: "fight-club",
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genres: ["Drama"],
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton"],
    runtimeMinutes: 139,
    posterUrl: "https://image.tmdb.org/t/p/w342/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    tagline: "Mischief. Mayhem. Soap.",
    description:
      "An insomniac office worker forms an underground fight club that evolves into something much more."
  },
  {
    id: 8,
    slug: "forrest-gump",
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genres: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright"],
    runtimeMinutes: 142,
    posterUrl: "https://image.tmdb.org/t/p/w342/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
    tagline: "Life is like a box of chocolates.",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, and more unfold through the eyes of Forrest Gump."
  },
  {
    id: 9,
    slug: "the-matrix",
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genres: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne"],
    runtimeMinutes: 136,
    posterUrl: "https://image.tmdb.org/t/p/w342/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
    tagline: "Welcome to the Real World.",
    description:
      "A hacker discovers the disturbing truth about his reality and his role in the war against its controllers."
  },
  {
    id: 10,
    slug: "spirited-away",
    title: "Spirited Away",
    year: 2001,
    rating: 8.6,
    genres: ["Animation", "Fantasy", "Adventure"],
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino"],
    runtimeMinutes: 125,
    posterUrl: "https://image.tmdb.org/t/p/w342/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    tagline: "The tunnel led Chihiro to a mysterious town...",
    description:
      "A young girl becomes trapped in a strange and magical world of spirits."
  }
];
