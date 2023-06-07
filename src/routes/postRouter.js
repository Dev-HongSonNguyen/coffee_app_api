import express from "express";
import {  getOnePost } from "../controllers/postController.js";

const router = express.Router();
router.get("/post/:id",getOnePost );
export default router;
