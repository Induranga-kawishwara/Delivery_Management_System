import express from "express";
import {
  getCart,
  addCartItem,
  deleteProduct,
} from "../controllers/cartproducts.js";

const router = express.Router();

router.get("/:id", getCart);
router.post("/", addCartItem);
router.delete("/:id", deleteProduct);

export default router;
