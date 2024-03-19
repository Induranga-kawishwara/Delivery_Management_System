import express from "express";
import { getStaff, addUser, deleteUser } from "../controllers/shops.js";

const router = express.Router();

router.get("/", getStaff);
router.post("/", addUser);
router.delete("/:id", deleteUser);

export default router;
