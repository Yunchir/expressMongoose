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

// const res = cloudinary.uploader.upload(
//   "https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/",
//   {
//     public_id: "olympic_flag",
//   }
// );

// res
//   .then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, () => {
  console.log("server runing", port);
});
