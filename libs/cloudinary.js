import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.COUDINARY_NAME,
  api_key: process.env.COUDINARY_KEY,
  api_secret: process.env.COUDINARY_SECRET,
});

const uploadImageOnCloudinary = async function (
  localFilePath,
  folder = "nfthome"
) {
  try {
    if (!localFilePath) return null;

    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder,
    });
    // console.log("file uploaded to cloudinary", result.url);

    fs.unlinkSync(localFilePath); //remove file from localFilePath after uploading to cloudinary
    return result;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return error;
  }
};

const deleteAssetFromCloudinary = async function (
  public_id,
  resource_type = "image"
) {
  try {
    if (!public_id) return null;

    //delete file from cloudinary
    const result = await cloudinary.uploader.destroy(public_id, {
      resource_type: `${resource_type}`,
    });
  } catch (error) {
    console.log("delete assset operation failed", error);
    return error;
  }
};

export { uploadImageOnCloudinary, deleteAssetFromCloudinary };
