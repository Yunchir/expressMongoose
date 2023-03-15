import express from "express";
import { getMovie } from "../service/movie-service";

const Router = express.Router();

Router.get("/movie", async (req, res) => {
  const mov = await getMovie();
  res.status(200).json(mov);
  console.log(mov);
  return mov;
});

export default Router;
