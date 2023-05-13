const express = require("express");
const workoutRouter = express.Router();
const { WorkoutModel } = require("../models/workout.model");

// GET REQUEST
workoutRouter.get("/", async (req, res) => {
  try {
    const { calories } = req.query;
    const query = {};
    if (calories) {
      query.calories = calories;
    }
    const workout = await WorkoutModel.find(query);
    res.status(200).send({ msg: "All Workout Data!!", ok: true, workout: workout });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// SINGLE WORKOUT DATA

workoutRouter.get('/single_workout/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const single_workout = await WorkoutModel.find({_id:id});
        res.status(200).send({msg:'Single Workout Data!',ok:true,single_workout:single_workout});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

// CREATE FOOD
workoutRouter.post("/add", async (req, res) => {
  try {
    const workout = WorkoutModel(req.body);
    await workout.save();
    res.status(200).send({ msg: "Workout Created!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// UPDATE FOOD
workoutRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await WorkoutModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Workout Updated!", ok: true, workout:workout  });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
// DELETE FOOD
workoutRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await WorkoutModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Workout Deleted!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { workoutRouter };
