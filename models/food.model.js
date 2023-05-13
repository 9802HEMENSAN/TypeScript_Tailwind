const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    category: { type: String, require: true },
    calories: { type: Number, require: true },
    order: { type: String, require: true },
    calories: { type: Number, require: true },
    genus: { type: String, require: true },
    nutritions: {
      type: {
        fat: { type: Number, require: true },
        sugar: { type: Number, require: true },
        carbohydrates: { type: Number, require: true },
        protein: { type: Number, require: true },
      },
    },
    foodId : { type : String , require : true },
  },
  { versionKey: false }
);

const FoodModel = mongoose.model("hackthon_foods", foodSchema);

module.exports = { FoodModel };

