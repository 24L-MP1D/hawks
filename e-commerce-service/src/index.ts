// src/index.ts

import express from "express";
import connectDB from "./configs/database";

import {
  createProduct,
  deleteProducts,
  getProducts,
  updateProducts,
} from "./controller/CategoryController";
import { productsRouter } from "./router/productsRouter";
const app = express();
const port = 4000;
const cors = require("cors");
connectDB();
app.use(cors());
app.use(express.json());

// products CRUD done
app.use(productsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
