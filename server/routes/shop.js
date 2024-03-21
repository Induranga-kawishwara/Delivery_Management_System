import express from "express";
import {
  getShopDetails,
  addShopDetails,
  DeleteShopDetails,
} from "../controllers/shops.js";

const router = express.Router();

router.get("/", getShopDetails);
router.post("/", addShopDetails);
router.delete("/:id", DeleteShopDetails);

export default router;
