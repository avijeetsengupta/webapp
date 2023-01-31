export const extractText = (data: any) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.summary, "text/html");
  return doc.body.textContent;
};
export const filterMoviesByGenre = (movies: any[], genre: any) => {
  return movies
    .filter((movie) => movie.genres.includes(genre))
    .map((movie) => ({ id: movie.id, image: movie.image.medium }));
};
export const filterAllMoviesByGenre = (movies: any[]) => {
  return {
    sciFi: filterMoviesByGenre(movies, "Science-Fiction"),
    drama: filterMoviesByGenre(movies, "Drama"),
    thriller: filterMoviesByGenre(movies, "Thriller"),
    crime: filterMoviesByGenre(movies, "Crime"),
    mystery: filterMoviesByGenre(movies, "Mystery"),
  };
};
