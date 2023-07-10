const router = require("express").Router();

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
      cast: cast.map((castId) => mongoose.Types.ObjectId(castId)),
    });

    const savedMovie = await newMovie.save();

    res.redirect("/movies");
  } catch (error) {
    console.log(error);
    res.render("error");
  }
});

// PUT /movies/:id
router.put("/:id", (req, res) => {
  // Handle PUT request to update a specific movie
});

// DELETE /movies/:id
router.delete("/:id", (req, res) => {
  // Handle DELETE request to delete a specific movie
});

module.exports = router;
