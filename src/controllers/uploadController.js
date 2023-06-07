import cloudinary from "../config/cloudinary.js";

export const uploadImage = (req, res) => {
  // Lấy đường dẫn tạm thời của file đã tải lên
  const filePath = req.file.path;
  // Sử dụng Cloudinary để tải lên file từ đường dẫn tạm thời
  cloudinary.uploader.upload(filePath, (err, result) => {
    if (err) {
      console.error("Error uploading image:", err);
      return res.status(500).json({ error: "Upload failed" });
    }
    // Trả về URL công khai của ảnh đã tải lên
    res.json({
      imageUrl: result.secure_url,
      message: "Upload hình ảnh thành công !",
    });
  });
};
export const updateImage = (req, res) => {
  // Lấy ID của ảnh cần cập nhật
  const imageId = req.params.id;
  // Cập nhật thông tin ảnh trong Cloudinary
  cloudinary.uploader.rename(imageId, { tags: "updated" }, (err, result) => {
    if (err) {
      console.error("Error updating image:", err);
      return res.status(500).json({ error: "Update failed" });
    }
    // Trả về kết quả cập nhật
    res.json({ message: "Update hình ảnh thành công !" });
  });
};
export const deleteImage = (req, res) => {
  // Lấy ID của ảnh cần xóa
  const imageId = req.params.id;
  // Xóa ảnh trong Cloudinary
  cloudinary.uploader.destroy(imageId, (err, result) => {
    if (err) {
      console.error("Error deleting image:", err);
      return res.status(500).json({ error: "Xóa hình ảnh thất bại !" });
    }
    // Trả về kết quả xóa
    res.json({ message: "Xóa hình ảnh thành công !" });
  });
};
