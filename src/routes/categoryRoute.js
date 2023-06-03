import express from "express";
import {
  createCategory,
  getAllCategory,
  getOneCategory,
} from "../controllers/categoryController.js";
const router = express.Router();
router.get("/categories", getAllCategory);
router.get("/categories/:id", getOneCategory);
router.post("/categories", createCategory);
export default router;
