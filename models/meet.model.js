import mongoose, { Schema } from "mongoose";

const meetSchema = new Schema({
  property_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },

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
