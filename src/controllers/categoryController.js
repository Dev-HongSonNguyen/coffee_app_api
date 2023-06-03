import categoryModel from "../models/categoryModel.js";
import validateCategory from "../schemas/categoryValidate.js";
export const getOneCategory = async (req, res) => {
  try {
    const category = await categoryModel
      .findById(req.params.id)
      .populate("products");
    if (!category) {
      return res.status(400).json({
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
export const createCategory = async (req, res) => {
  try {
    const category = await categoryModel.create(req.body);
    const { error } = validateCategory.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    if (!category) {
      return res.json({
        message: "Thêm tài nguyên thất bại !",
      });
    }
    return res.json({
      message: "Thêm tài nguyên thành công !",
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(400).json({
        message: "Xoa tài nguyên thất bại !",
      });
    }
    return res.json({
      message: "Xóa tài nguyên thành công !",
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const updateCategory = async (req, res) => {
  try {
    const category = await categoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    const { error } = validateCategory.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    if (!category) {
      return res.json({
        message: "Update tài nguyên không thành công !",
      });
    }
    return res.json({
      message: "Update tài nguyên thành công !",
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
