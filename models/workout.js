const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // date: {
  //   type: Date,
  //   default: () => new Date()
  // },
  day: {
    type: Date,
    default: Date.now()
  },

  totalDuration: {
    type: Number,
    default: 0,
  },

  exercises: [
    {
      type: {
        type: String,
      },

      name: {
        type: String,
      },

      duration: {
        type: Number
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

      distance: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;