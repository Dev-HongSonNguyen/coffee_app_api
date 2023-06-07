import express from "express";
import { createPost, deletePost, getAllPost, getOnePost, updatePost } from "../controllers/postController.js";

const router = express.Router();
router.get("/post/:id", getOnePost);
router.get("/post", getAllPost);
router.post("/post", createPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);
export default router;
