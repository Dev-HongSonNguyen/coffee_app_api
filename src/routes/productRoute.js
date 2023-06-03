import express from "express";
import { createProduct, getAllProduct } from "../controllers/productController.js";
const router = express.Router();
router.get("/products", getAllProduct);
router.post("/products", createProduct);
export default router;
