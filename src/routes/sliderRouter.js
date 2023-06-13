import express from "express";
import { getAllSlider, createSlider, getOneSlider, updateSlider, deleteSlider } from "../controllers/sliderController.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const router = express.Router();
router.get("/slider/:id", getOneSlider);
router.get("/slider", getAllSlider);
router.post("/slider", checkPermission, createSlider);
router.put("/slider/:id", checkPermission, updateSlider);
router.delete("/slider/:id", checkPermission, deleteSlider);
export default router;