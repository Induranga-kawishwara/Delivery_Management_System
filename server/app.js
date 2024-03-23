import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import authRoute from "./routes/auth.js";
import employeeRoute from "./routes/employee.js";
import userRoute from "./routes/user.js";

import productsRoute from "./routes/products.js";
import shopRoute from "./routes/shop.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.use("/auth", authRoute);
app.use("/employee", employeeRoute);
app.use("/shop", shopRoute);
app.use("/product", productsRoute);
app.use("/user", userRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
