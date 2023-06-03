import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getOneCategory,
  updateCategory,
} from "../controllers/categoryController.js";
const router = express.Router();
router.get("/categories", getAllCategory);
router.get("/categories/:id", getOneCategory);
router.post("/categories", createCategory);
router.delete("/categories/:id", deleteCategory);
router.put("/categories/:id", updateCategory);
export default router;
