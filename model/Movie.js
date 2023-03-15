import mongoose from "mongoose";

let movieSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },

    createdOn: {
      type: Date,
      default: Date.now,
    },

    avialable: Boolean,
    modifiedOn: Date,
  },
  {
    collection: "movies",
  }
);

const Movie = mongoose.model("Movie", movieSchema, "movies");

export default Movie;
