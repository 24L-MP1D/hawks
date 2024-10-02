import { Request, Response } from "express";
import { Product } from "../model/productModel";

export const createProduct = async (req: Request, res: Response) => {
  const products = req.body;
  products.createAt = new Date();
  console.log({ products });
  try {
    const product = await Product.create(products);
    res.send(product);
  } catch (error) {
    console.error(error);
    res.send("find error");
  }
};
export const getOneProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log({ id });
  try {
    const product = await Product.findOne({ _id: id });
    console.log(product);
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};
export const getProducts = async (req: Request, res: Response) => {
  const { lowprice, highprice, toDate, fromDate } = req.query;
  console.log(req.query);
  const filt: {
    price?: { $gt: number; $lt: number };
    createAt?: { $gt: Date; $lt: Date };
  } = {};
  if (toDate !== "undefined" && fromDate !== "undefined") {
    filt.createAt = {
      $gt: new Date(String(fromDate)),
      $lt: new Date(String(toDate)),
    };
  }
  if (lowprice && highprice) {
    filt.price = { $gt: Number(lowprice), $lt: Number(highprice) };
  }
  if (
    lowprice ||
    highprice ||
    (toDate !== "undefined" && fromDate !== "undefined")
  ) {
    const product = await Product.find(filt);
    return res.send(product);
  }
  try {
    const product = await Product.find();
    console.log({ product });
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};
export const getFiltProducts = async (req: Request, res: Response) => {
  try {
    let { categoryType, lowprice, highprice, fromDate, toDate } = req.query;

    const filter: {
      categoryType?: string;
      price?: { $gt: number; $lt: number };
      // fromDate?: { $gt: string };
      // toDate?: { $lt: string };
      date?: { $gt: string; $lt: string };
    } = {};

    if (categoryType) {
      filter.categoryType = String(categoryType);
    }

    if (Number(lowprice) != 0 && Number(highprice) != 0) {
      filter.price = { $gt: Number(lowprice), $lt: Number(highprice) };
    }

    // if (!fromDate && toDate) {
    //   filter.toDate = { $lt: String(toDate) };
    // }
    if (fromDate != "undefined" && toDate != "undefined") {
      filter.date = { $gt: String(fromDate), $lt: String(toDate) };
    }

    const filtProduct = await Product.find(filter);

    res.send(filtProduct);
  } catch (err) {
    res.send(err);
  }
};
export const deleteProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete({ _id: id });
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};
export const updateProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  try {
    const product = await Product.updateOne({ _id: id }, updatedProduct);
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};
