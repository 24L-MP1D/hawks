// src/index.ts
import express from "express";

import { userRouter } from "./router/UserRouter";
import { saveRouter } from "./router/SaveRouter";

import connectDB from "./configs/database";

import {
  createProduct,
  deleteProducts,
  getProducts,
  updateProducts,
} from "./controller/CategoryController";
import { productsRouter } from "./router/productsRouter";
import { createUser } from "./controller/UserController";

const app = express();
const port = 4500;

connectDB();

app.use(express.json());
app.use(userRouter);
app.use(saveRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
