import * as cloudinary from "cloudinary";
// Configuration

cloudinary.config({
  cloud_name: "dsjpqlqls",
  api_key: "548382799783726",
  api_secret: "jBC1jgXNVhC1ozGUUoaIHgWKsWA",
});

const res = cloudinary.v2.uploader.upload(
  "https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/",
  {
    public_id: "olympic_flag",
    folder: "product",
    uses_filename: true,
  }
);

res
  .then((data) => {
    console.log(data);
    console.log(data.secure_url);
  })
  .catch((err) => {
    console.log(err);
  });

// export default cloudinary;
