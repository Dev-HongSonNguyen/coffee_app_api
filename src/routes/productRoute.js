import express from "express";
import { createProduct, getAllProduct, getOneProduct } from "../controllers/productController.js";
const router = express.Router();
router.get("/products", getAllProduct);
router.get("/products/:id", getOneProduct);
router.post("/products", createProduct);
export default router;
