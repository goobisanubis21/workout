const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Add a workout type"
  },

  name: {
    type: String,
    trim: true,
    required: "What is the name of the workout"
  },

  duration: {
    type: Number,
    required: "How long is the workout"
  },

  weight: {
    type: Number
  },

  reps: {
    type: Number
  },

  sets: {
    type: Number
  }
});

const Workout = mongoose.model("workout", UserSchema);

module.exports = Workout;