import express from "express";
import cors from "cors";
import "./libs/multer.js";
import propertyRouter from "./routes/property.route.js";
import meetRouter from "./routes/meet.route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PATCH, DELETE, PUT",
  })
);

app.use("/api/properties", propertyRouter);
app.use("/api/meets", meetRouter);

//Error route
app.use((err, req, res, next) => {
  console.log("\nError route handler 💥. \n", err);
  console.log("Error message", err.message);
  res.status(err.statusCode || 500).json({
    status: "fail",
    message: err.message,
  });
});

export default app;
