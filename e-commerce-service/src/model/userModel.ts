import { model, Schema } from "mongoose";

const schema = new Schema({
  productName: String,
  price: Number,
  categoryId: String,
  qty: Number,
  thumbnails: String,
  images: String,
  coupon: String,
  salePercent: Number,
  description: String,
  viewCount: Number,
  createAt: Date,
  updateAt: Date,
});
export const Product = model("products", schema);