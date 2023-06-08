import bcrypt from 'bcryptjs';
import User from '../models/authModel.js';
import dotenv from 'dotenv';
import  jwt  from 'jsonwebtoken';
import { signInSchema, signupSchema } from '../schemas/authValidate.js';

dotenv.config(); 

export const signup = async(req, res) =>{
    try {
        const{name, email, password} = req.body
        const {error} = signupSchema.validate(req.body, {abortEarly: false});

        if(error){
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({
                message: errors,
            })
        }

        //kiem tra ton tai email trong User(mongo) không ? 

        const userExits = await User.findOne({email})
        if(userExits){
            return res.status(400).json({
                message: "Email đã được đăng ký !"
            })
        }
        
        // ma hoa mat khau truoc khi dua vao mongoDb level10
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
            name, 
            email,
            password: hashedPassword
        });

        // khi tao xong khong hien thi ra ngoai 
        user.password = undefined;

        const token = jwt.sign({_id: user.id}, process.env.SECRET_KEY, {expiresIn: 60 * 60});

        return res.status(201).json({
            message: "Đăng ký thành công !",
            accessToken: token,
            user,
        });


    } catch (error) {
        console.log(error);
    }
}

export const singIn = async(req, res) => {
    try {
        const{ email, password} = req.body
        const {error} = signInSchema.validate(req.body, {abortEarly: false});

        if(error){
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({
                message: errors,
            })
        }

        //kiem tra ton tai email trong User(mongo) không

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message: "Tài Khoản Không Tồn Tại !!!"
            })
        }
        
        // ma hoa mat khau truoc khi dua vao mongoDb level10
        const hashedPassword = await bcrypt.hash(password, user.password)

        if(!hashedPassword){
            return res.status(400).json({
                message: "Mật khẩu không khớp"
            });
        }
        

        // khi tao xong khong hien thi ra ngoai 
        user.password = undefined;

        const token = jwt.sign({_id: user.id}, process.env.SECRET_KEY, {expiresIn: 60 * 60});

        return res.status(201).json({
            message: "Đăng nhập thành công !",
            accessToken: token,
            user,
        });


    } catch (error) {
        console.log(error);
    }
}