import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import categoryRoute from "./src/routes/categoryRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(morgan("tiny"));
app.use(categoryRoute);
mongoose
  .connect(
    "mongodb+srv://team7:T30BQvgth3e7yzMU@cluster0.ib88ruw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));
app.listen(port, () => {
  console.log(`server ${port}`);
});
