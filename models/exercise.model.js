const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
    name : { type : String , require : true },
    description : { type : String , require : true },
    image : { type : String , require : true },
    editorial : { type : String , require : true },
    calories : { type : Number , require :true },
    exerciseId : { type : String , require : true },
    duration : { type : Number , require :true }

}, { timestamps: true });

const ExerciseModel = mongoose.model("hakathon_exercise", exerciseSchema);

module.exports = { ExerciseModel };
