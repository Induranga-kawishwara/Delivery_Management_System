import { Schema, model } from "mongoose";

const ProductsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  details: [
    {
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      productid: {
        type: String,
        required: true,
      },
    },
  ],
});

export default model("Cart", ProductsSchema);
