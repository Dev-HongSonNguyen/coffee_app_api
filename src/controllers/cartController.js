import cartModel from "../models/cartModel.js";
import validateCart from "../schemas/cartValidate.js";

export const getAllCart = async (req, res) => {
    try {
        const carts = await cartModel.find()
        if (!carts) {
            return res.status(404).json({
                message: "Lấy tài nguyên thất bại !",
            });
        }
        return res.json({
            message: "Lấy tài nguyên thành công !",
            carts,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const getOneCart = async (req, res) => {
    try {
        const cart = await cartModel
            .findById(req.params.id)


        if (!cart) {
            return res.json({
                message: "Lấy tài nguyên thất bại !",
            });
        }
        return res.json({
            message: "Lấy tài nguyên thành công !",
            cart,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const createCart = async (req, res) => {
    try {
        const { error } = validateCart.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const carts = await cartModel.create(req.body);
        if (!carts) {
            return res.json({
                message: "Thêm tài nguyên không thành công !",
            });
        }
        return res.json({
            message: "Thêm tài nguyên thành công !",
            carts,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const updateCart = async (req, res) => {
    try {
        const { error } = validateCart.validate(req.body);
        if (error) {
            return res.status(400).json({
                massage: error.details[0].message,
            });
        }

        const cart = await cartModel.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!cart) {
            return res.json({
                message: "Cập nhật tài nguyên không thành công !",
            });
        }
        return res.json({
            message: "Cập nhật tài nguyên thành công !",
            cart,
        });
    } catch (error) {
        return res.json(400).json({
            message: error,
        });
    }
};
export const deleteCart = async (req, res) => {
    try {
        const carts = await cartModel.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa tài nguyên thành công !",
            carts,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
