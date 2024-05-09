import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    topView: {
      url: { type: String },
      public_id: { type: String },
    },

    gallery: [
      {
        url: { type: String },
        public_id: { type: String },
      },
    ],
    price: {
      type: Number,
      require: true,
    },
    location: {
      type: String,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
