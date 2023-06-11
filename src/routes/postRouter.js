import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getOnePost,
  updatePost,
} from "../controllers/postController.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const router = express.Router();
router.get("/post/:id", getOnePost);
router.get("/post", getAllPost);
router.post("/post", checkPermission, createPost);
router.put("/post/:id", checkPermission, updatePost);
router.delete("/post/:id", checkPermission, deletePost);
export default router;
