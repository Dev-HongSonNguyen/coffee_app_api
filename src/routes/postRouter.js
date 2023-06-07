import express from "express";
import { getOnePost, updatePost } from "../controllers/postController.js";

const router = express.Router();
router.get("/post/:id", getOnePost);
router.put("/post/:id", updatePost);
export default router;
