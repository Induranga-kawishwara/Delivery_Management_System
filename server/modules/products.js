import { Schema, model } from "mongoose";

const ProductsSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  shopPrice: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default model("products", ProductsSchema);
