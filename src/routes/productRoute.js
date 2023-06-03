import express from "express";
import { createProduct, deleteProduct, getAllProduct, getOneProduct } from "../controllers/productController.js";
const router = express.Router();
router.get("/products", getAllProduct);
router.get("/products/:id", getOneProduct);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
export default router;
