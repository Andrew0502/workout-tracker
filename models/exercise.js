const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  day: {
    type: {
        type: Date,
        default: () =>  {
            new Date()
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
              name: String,
              trim: true,
              required: "Name is required!",
          },
          duration: {
            duration: number,
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

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;