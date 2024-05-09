import express from "express";
import { upload } from "../libs/multer.js";
import { uploadProperty } from "../controllers/property.controller.js";
const propertyRouter = express.Router();

propertyRouter.route("/listproperty").post(
  upload.fields([
    { name: "topView", maxCount: 1 },
    { name: "gallery", maxCount: 4 },
  ]),
  uploadProperty
);
propertyRouter.route("/getproptery");

export default propertyRouter;
