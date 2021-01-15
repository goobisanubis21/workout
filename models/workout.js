const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true
      },

      name: {
        type: String,
        trim: true,
        required: true
      },

      duration: {
        type: Number,
        required: true
      },

      weight: {
        type: Number
      },

      reps: {
        type: Number
      },

      sets: {
        type: Number
      },
      
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;