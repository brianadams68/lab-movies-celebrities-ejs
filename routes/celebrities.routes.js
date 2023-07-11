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
  const newCelebrity = await CelebrityModel.create(req.body);
  res.redirect("/celebrities");
});

router.get("/elebrities", async (req, res) => {
  const celebrities = await Celebrity.find();
  res.render("celebrities/celebrities", { celebrities });
});

// PUT /celebrities/:id

// DELETE /celebrities/:id
router.delete("/:id", (req, res) => {
  // Handle DELETE request to delete a specific celebrity
});

module.exports = router;
