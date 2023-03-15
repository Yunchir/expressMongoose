import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://mongoose:12345678a@cluster0.gqhbgdd.mongodb.net/sample_mflix?retryWrites=true&w=majority"
);

export default mongoose.connection;
