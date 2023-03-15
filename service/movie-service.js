import Movie from "../Model/Movie.js";

export async function getMovie() {
  return await Movie.findOn();
}
