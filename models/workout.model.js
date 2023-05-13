const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
  {
    image: { type: String, require: true },
    summary_group: { type: String, require: true },
    content_title: { type: String, require: true },
    sub_title: { type: String, require: true },
    foodTime: { type: String, require: true },
    user_type: { type: String, require: true },
    heart: { type: Number, require: true },
    chat: { type: Number, require: true },
  },
  { versionKey: false }
);

const WorkoutModel = mongoose.model("workout_videos", workoutSchema);

module.exports = { WorkoutModel };
