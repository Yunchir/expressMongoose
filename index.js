import express from "express";
import cors from "cors";
import db from "./config/mongoos.config.js";
import movie from "./Model/Movie.js";

const app = express();
const port = 2000;
app.use(cors());
app.use(express.json());

app.use(cors());

db.once("open", () => {
  movie
    .find({})
    .limit(1)
    .then((movies) => {
      console.log("Error querying movies: ", movies);
    });
});

app.listen(port, () => {
  console.log("server runing", port);
});
