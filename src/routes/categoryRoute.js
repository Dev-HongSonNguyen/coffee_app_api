import express from "express";
import {
  getAllCategory,
  getOneCategory,
} from "../controllers/categoryController.js";
const router = express.Router();
router.get("/categories", getAllCategory);
router.get("/categories/:id", getOneCategory);
export default router;
