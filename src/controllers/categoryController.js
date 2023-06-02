import categoryModel from "../models/categoryModel.js";
export const getAllCategory = async (req, res) => {
  try {
    const category = await categoryModel.find();
    if (!category) {
      return res.status.json({
        message: "Lấy tài nguyên thất bại !",
      });
    }
    return res.json({
      message: "Lấy tài nguyên thành công !",
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
