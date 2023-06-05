import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import categoryRoute from "./src/routes/categoryRoute.js";
import productRoute from "./src/routes/productRoute.js";
import authRoute from "./src/routes/authRouter.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(categoryRoute);
app.use(productRoute);
app.use(authRoute);
mongoose
  .connect(
    "mongodb+srv://nguyenhongson20433:9gjfX7VDs7Z9XzK1@cluster0.cnb4wcl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));
app.listen(port, () => {
  console.log(`server ${port}`);
});
