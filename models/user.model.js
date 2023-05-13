const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    gender: { type: String, enum: ["male", "female"] },
    password: { type: String, require: true },
    height: { type: Number, require: true },
    weight: { type: Number, require: true },
    age: { type: Number },
    goal: {
      type: String,
      enum: ["Lose Weight", "Maintain Weight", "Gain Weight"],
    },
    dob: { type: String },
    country: {
      type: String,
      enum: ["india", "america", "russia"],
    },
    issues: {
      type: String,
      enum: [
        "Lack of Time",
        "Healthy Diet Lack Variety",
        "Stree Around Food Choice",
        "Food Cravings",
        "I did no face any barrier",
      ],
    },
    activity: {
      type: String,
      enum: ["Not Very Active", "Lightly Active", "Very Active"],
    },
    avatar: { type: String },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("hakathon_user", userSchema);

module.exports = { UserModel };
