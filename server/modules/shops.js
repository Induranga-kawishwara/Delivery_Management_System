import { Schema, model } from "mongoose";

const ShopsSchema = new Schema({
  shopId: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  shopOwnerTitle: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: String,
    required: true,
  },
  shopNo: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  regisDate: {
    type: Date,
    require: true,
  },
  TypeRtestent: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
});

export default model("shops", ShopsSchema);
