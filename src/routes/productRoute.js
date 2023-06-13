import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
} from "../controllers/productController.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();
router.get("/products", getAllProduct);
router.get("/products/:id", getOneProduct);
router.post("/products", checkPermission, createProduct);
router.put("/products/:id", checkPermission, updateProduct);
router.delete("/products/:id", checkPermission, deleteProduct);
export default router;
