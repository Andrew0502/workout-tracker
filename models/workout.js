const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: {
      type: Date,
      default: () => {
        new Date();
      },
    },
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is required!",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is required!",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Duration is required!",
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
