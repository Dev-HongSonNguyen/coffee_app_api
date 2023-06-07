import express from "express";
import { createPost, getAllPost, getOnePost, updatePost } from "../controllers/postController.js";

const router = express.Router();
router.get("/post/:id", getOnePost);
router.get("/post", getAllPost);
router.post("/post", createPost);
router.put("/post/:id", updatePost);
export default router;
