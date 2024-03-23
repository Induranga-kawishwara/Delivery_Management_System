import express from "express";
import { getUser, addUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", addUser);
router.delete("/:id", deleteUser);

export default router;
