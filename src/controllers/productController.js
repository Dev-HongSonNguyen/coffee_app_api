import productModel from "../models/productModel.js";
import validateProduct from "../schemas/productValidate.js";
export const getAllProduct = async (req, res) => {
  const { _limit = 10, _sort, _order } = req.query;
  const options = {
    limit: _limit,
  };
  try {
    const products = await productModel.paginate({}, options);
    if (!products) {
      return res.status(404).json({
        message: "Lấy tài nguyên thất bại !",
      });
    }
    return res.json({
      message: "Lấy tài nguyên thành công !",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const createProduct = async (req, res) => {
  try {
      const { error } = validateProduct.validate(req.body);
      if (error) {
          return res.status(400).json({
              message: error.details[0].message,
          });
      }
      const products = await productModel.create(req.body);
      if (!products) {
          return res.json({
              message: "Thêm tài nguyên không thành công !",
          });
      }
      return res.json({
          message: "Thêm tài nguyên thành công !",
          products,
      });
  } catch (error) {
      return res.status(400).json({
          message: error,
      });
  }
};