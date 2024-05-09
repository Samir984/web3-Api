import "dotenv/config";
import app from "./app.js";

console.log(process.env.DB_URI);
import mongoose from "mongoose";
const dbConnect = async function () {
  try {
    const connetionStatus = await mongoose.connect(process.env.DB_URI);
    console.log("\n\nDatabase connetion established succesfully 🔗.\n\n");
  } catch (error) {
    console.log("\n\nERROR: Database connection fail 💥.\n\n", error);
    throw new Error("Dadabase connection fail 💥");
  }
};

const port = process.env.PORT || 8000;
dbConnect().then(() => {
  app.listen(port, () => {
    console.log("Server started Listening 🗄️ .\n\n ");
  });
});
