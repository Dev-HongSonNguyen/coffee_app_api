import postModel from "../models/postModel.js";
import validatePost from "../schemas/postValidate.js";
export const getOnePost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id)
    if (!post) {
      return res.json({
        message: "Lấy tài nguyên thất bại !",
      });
    }
    return res.json({
      message: "Lấy tài nguyên thành công !",
      post,
    })
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const getAllPost = async (req, res) => {
  try {
    const post = await postModel.find()
    if (!post) {
      return res.status(404).json({
        message: "Lấy tài nguyên thất bại !",
      });
    }
    return res.json({
      message: "Lấy tài nguyên thành công !",
      post,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const createPost = async (req, res) => {
  try {
    const { error } = validatePost.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const post = await postModel.create(req.body);
    if (!post) {
      return res.json({
        message: "Thêm tài nguyên không thành công !",
      });
    }
    return res.json({
      message: "Thêm tài nguyên thành công !",
      post,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const updatePost = async (req, res) => {

  try {
    const { error } = validatePost.validate(req.body);
    if (error) {
      return res.status(400).json({
        massage: error.details[0].message,
      })
    }
    const post = await postModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    if (!post) {
      return res.json({
        message: "Cập nhật tài nguyên không thành công !"
      })
    }
    return res.json({
      message: "Cập nhật tài nguyên thành công !",
      post,
    })
  } catch (error) {
    return res.json(400).json({
      message: error,
    })
  }
};

