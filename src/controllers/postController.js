import postModel from "../models/postModel.js";
export const getOnePost = async(req, res) => {
  try {
      const post = await postModel.findById(req.params.id)  
      if(!post){
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

