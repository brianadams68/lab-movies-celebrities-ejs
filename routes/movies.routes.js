const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movies.model");

// GET /movies
router.get("/", (req, res) => {
  res.send("All Movies");
});

// GET /movies/:id
router.get("/new-movie", async (req, res) => {
  try {
    const celebrities = await Celebrity.find();

    res.render("movies/new-movie", { celebrities });
  } catch (error) {
    console.log(error);
    res.render("error");
  }
});

// POST /movies
router.post("/create", async (req, res) => {
  try {
    const { title, genre, cast } = req.body;

    const newMovie = new Movie({
      title,
      genre,
      cast,
    });

    await newMovie.save();

    res.redirect("/movies");
  } catch (error) {
    console.log(error);
    res.render("error");
  }
});

// PUT /movies/:id
router.put("/", async (req, res) => {
  try {
    const movies = await Movie.find();

    res.render("movies/movies", { movies });
  } catch (error) {
    console.log(error);
    res.render("error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("cast");

    res.render("movies/movie-details", { movie });
  } catch (error) {
    console.log(error);
    res.render("error");
  }
});

// DELETE /movies/:id
router.delete("/:id", (req, res) => {
  // Handle DELETE request to delete a specific movie
});

module.exports = router;
