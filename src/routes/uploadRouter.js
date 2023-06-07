import express from "express";
import multer from "multer";
import {
  deleteImage,
  updateImage,
  uploadImage,
} from "../controllers/uploadController.js";
const router = express.Router();
// Định nghĩa middleware multer để xử lý tải lên file
const upload = multer({ dest: "uploads/" });
// Định nghĩa API endpoint cho việc tải lên ảnh
router.post("/upload", upload.single("image"), uploadImage);
router.put("/upload/:id", updateImage);
router.delete("/upload/:id", deleteImage);
export default router;
