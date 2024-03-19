import express from "express";
import {
  getEmployees,
  addgetEmployee,
  deleteEmployee,
} from "../controllers/employees.js";

const router = express.Router();

router.get("/", getEmployees);
router.post("/", addgetEmployee);
router.delete("/:id", deleteEmployee);

export default router;
