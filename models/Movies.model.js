const { Schema, model } = require("mongoose");

const moviesSchema = new Schema({
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: "Movies",
    },
  ],
});

const Movie = model("Movie", moviesSchema);

module.exports = Movie;
