const express = require("express");
const foodRouter = express.Router();
const { FoodModel } = require("../models/food.model");

// GET REQUEST
foodRouter.get("/", async (req, res) => {
  try {
    const {calories,category } = req.query;
    const query = {};
    if (calories) {
      query.calories = {$lte : calories};
    }
    if (category) {
      query.category = category;
    }
    const food = await FoodModel.find(query);
    res.status(200).send( food);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// SINGLE FOOD DATA
foodRouter.get("/single_food/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const single_food = await FoodModel.find({ _id: id });
    res
      .status(200)
      .send({ msg: "Single Food Data!", ok: true, single_food: single_food });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// CREATE FOOD
foodRouter.post("/add", async (req, res) => {
  try {
    const food = FoodModel(req.body);
    await food.save();
    res.status(200).send({ msg: "Food Created!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// UPDATE FOOD
foodRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await FoodModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Food Updated!", ok: true, food: food });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
// DELETE FOOD
foodRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await FoodModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Food Deleted!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { foodRouter };
