const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        minlength: 1,
        required: "Type is required!",
      },
      name: {
        type: String,
        trim: true,
        minlength: 1,
        required: "Name is required!",
      },
      duration: {
        type: Number,
        trim: true,
        minlength: 1,
        required: "Duration is required!",
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
},
{
  toJSON: {
    // include any virtual properties when data is requested.
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total,current) => total + current.duration, 0)
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
