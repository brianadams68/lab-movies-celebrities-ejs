const { aplication } = require("express");
const CelebrityModel = require("../models/Celebrity.model");
const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

// GET /celebrities
router.get("/", (req, res) => {
  res.send("All Celebrities");
});

// GET /celebrities/:id
router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

// POST /celebrities
router.post("/create", async (req, res) => {
  try {
    const { name, occupation, catchPhrase } = req.body;

    const newCelebrity = new Celebrity({
      name,
      occupation,
      catchPhrase,
    });

    const savedCelebrity = await newCelebrity.save();

    res.redirect("/celebrities");
  } catch (error) {
    console.log(error);
    res.render("celebrities/new-celebrity");
  }
});

// PUT /celebrities/:id
router.put("/:id", async (req, res) => {
  try {
    const updatedCelebrity = await Celebrity.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
      },
      { new: true }
    );

    res.redirect(`/celebrities/${updatedCelebrity._id}`);
  } catch (error) {
    console.log(error);
    res.render("error");
  }
});

// DELETE /celebrities/:id
router.delete("/:id", (req, res) => {
  // Handle DELETE request to delete a specific celebrity
});

module.exports = router;
