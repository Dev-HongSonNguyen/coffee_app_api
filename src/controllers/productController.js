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
export const getOneProduct = async(req, res) => {
  try {
      const product = await productModel.findById(req.params.id).populate("categoryId")
      
      if(!product){
          return res.json({
              message: "Lấy tài nguyên thất bại !",
          });
      }
      return res.json({
          message: "Lấy tài nguyên thành công !",
          product,
      })
  } catch (error) {
      return res.status(400).json({
          message: error,
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
export const updateProduct = async(req, res) => {
    
  try {
      const {error} = validateProduct.validate(req.body);
      if(error){
          return res.status(400).json({
              massage: error.details[0].message,
          })
      }

      
      const product = await productModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
      if(!product){
          return res.json({
              message: "Cập nhật tài nguyên không thành công !"
          })
      }
      return res.json({
          message: "Cập nhật tài nguyên thành công !",
          product,
      })
  } catch (error) {
      return res.json(400).json({
          message: error,
      })
  }
};
export const deleteProduct = async (req, res) => {
  try {
      const products = await productModel.findByIdAndDelete(req.params.id);
      return res.json({
          message: "Xóa tài nguyên thành công !",
          products,
      });
  } catch (error) {
      return res.status(400).json({
          message: error,
      });
  }
};
