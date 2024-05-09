import mongoose, { Schema } from "mongoose";

const meetSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Meet = mongoose.model("Meet", meetSchema);
