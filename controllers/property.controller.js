import { uploadImageOnCloudinary } from "../libs/cloudinary.js";
import Property from "../models/property.model.js";
import AppError from "../utils/AppError.js";
import AppResponse from "../utils/AppReponse.js";
import asyncHandler from "../utils/AsyncHandler.js";

export const uploadProperty = asyncHandler(async (req, res) => {
  console.log("uploadpropterty controller");
  const { user_id, name, description, price, location, area } = req.body;

  const { topView, gallery } = req.files;
  console.log(topView, gallery);

  const topViewImg = await uploadImageOnCloudinary(
    topView[0].path,
    "properties"
  );

  // Upload gallery images to Cloudinary
  const galleryImages = await Promise.all(
    gallery.map(
      async (image) => await uploadImageOnCloudinary(image.path, "properties")
    )
  );
  // Create new Property object with Cloudinary URLs
  const newProperty = new Property({
    user_id,
    name,
    description,
    price,
    location,
    area,
    topView: {
      url: topViewImg.secure_url,
      public_id: topViewImg.public_id,
    },
    gallery: galleryImages.map((img) => ({
      url: img.secure_url,
      public_id: img.public_id,
    })),
  });
  const proptery = await newProperty.save();
  if (!newProperty) throw new AppError(500, "Proptery  upload failed");

  return res.status(201).json(new AppResponse(proptery));
});

export const getproptery = asyncHandler(async (req, res) => {
  const { _id, user_id } = req.query;
  console.log(_id, user_id);
  let property;
  if (_id) {
    property = await Property.findById(_id);
  } else {
    property = await Property.find({ user_id });
  }
  if (!property) throw new AppError(500, "getproptery error");

  return res.status(200).json(new AppResponse(property));
});
