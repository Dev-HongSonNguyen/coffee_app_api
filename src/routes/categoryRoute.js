import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getOneCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();
router.get("/categories", getAllCategory);
router.get("/categories/:id", getOneCategory);
router.post("/categories", checkPermission, createCategory);
router.delete("/categories/:id", checkPermission, deleteCategory);
router.put("/categories/:id", checkPermission, updateCategory);
export default router;
