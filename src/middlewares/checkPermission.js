import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/authModel.js";

dotenv.config();

export const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, async (error, payload) => {
      if (error) {
        if (error.name === "JsonWebTokenError") {
          return res.status(400).json({
            message: "Token không hợp lệ",
          });
        }
        if (error.name == "TokenExpiredError") {
          return res.status(400).json({
            message: "Token hết hạn",
          });
        }
      }
      const user = await User.findById(payload._id);
      if (!user) {
        return res.status(400).json({
          message: "Unauthorized",
        });
      }
      if (user.role !== "admin") {
        return res.status(401).json({
          message: "Bạn không có quyền truy cập vào tài nguyên !!!",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
  }
};
