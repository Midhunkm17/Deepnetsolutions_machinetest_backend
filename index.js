import express from "express";
import cors from "cors";
import "dotenv/config.js";
import menuRoute from "./Routes/menu.js";
import mongoose from "mongoose";
const dnsApp = express();
dnsApp.use(cors());
dnsApp.use(express.json());
dnsApp.use("/api/menu", menuRoute);
const port = process.env.PORT || 5000;

dnsApp.listen(port, () => {
  console.log("Server running at port " + port);
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Mongodb connected successfully"))
      .catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
  }
});
