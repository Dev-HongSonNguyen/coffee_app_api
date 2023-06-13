import express from "express";

import {
  createSale,
  getAllSale,
  getOneSale,
  updateSale,
  deleteSale,
} from "../controllers/saleController.js";

import { checkPermission } from "../middlewares/checkPermission.js";

const router = express.Router();
router.get("/sale/:id", getOneSale);
router.get("/sale", getAllSale);
router.post("/sale", checkPermission, createSale);
router.put("/sale/:id", checkPermission, updateSale);
router.delete("/sale/:id", checkPermission, deleteSale);

export default router
