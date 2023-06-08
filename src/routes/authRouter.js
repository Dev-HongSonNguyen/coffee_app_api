import { Router } from "express";
import { signup, singIn } from "../controllers/authController.js";

const router = Router();
router.post("/signup", signup);
router.post("/signin", singIn);

export default router;