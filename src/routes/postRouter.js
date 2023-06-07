import express from "express";
import { getAllPost, getOnePost, updatePost } from "../controllers/postController.js";

const router = express.Router();
router.get("/post/:id", getOnePost);
router.get("/post", getAllPost);
router.put("/post/:id", updatePost);
export default router;
