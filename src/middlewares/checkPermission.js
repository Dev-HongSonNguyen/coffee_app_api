import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/authModel.js';

dotenv.config();

export const checkPermission = async(req, res, next) => {
    try {
        if(!req.headers.authorization){
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const token = req.headers.authorization.split(" ")[1];



         jwt.verify(token, process.env.SECRET_KEY, async(error, payload) => {
            if(error){
                if(error.name ===  "JsonWebTokenError"){
                    return res.status(400).json({
                        message: "Token không hợp lệ"
                    })
                };
                if(error.name == "TokenExpiredError"){
                    return res.status(400).json({
                        message: "Token hết hạn"
                    })
                }
            }

            const user = await User.findById(payload._id);

        if(!user){
            return res.status(400).json({
                message: "Unauthorized",
            })
        }

            if(user.role !== "admin"){
                return res.status(401).json({
                    message: "Bạn không có quyền truy cập vào tài nguyên !!!"
                })
            }

            req.user = user;
            next();
         });



        
        } catch (error) {
       console.log(error)
    }
};

// Bước 1: kiểm tra thông tin token gửi có không? Nếu không có thì thông báo cần phải đăng nhập
// Bước 2: Lấy token bằng cách chuyển từ chuỗi sang mảng và lấy phần tử thứ 2
// Bước 3: Kiểm tra token có hợp lệ không? Nếu không hợp lệ thì thông báo cần phải đăng nhập
// Bước 4: Giải mã token và lấy ID, kiểm tra ID tồn tại trong db không?
// Bước 5: Kiểm tra quyền của user có phải là admin không? Nếu không phải thì thông báo không có quyền truy cập tài nguyên
// Bước 6: Nếu hợp lệ thì cho phép truy cập tài nguyên
// Bước 7: Gắn middleware vào router nào cần check quyền