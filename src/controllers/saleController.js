import saleModel from "../models/saleModel.js";
import validateSale from "../schemas/saleValidate.js";

export const getAllSale = async( req, res) => {
    try {
        const sale = await saleModel.find();
        if(!sale) {
            return res.status(400).json({
                message: "Lấy tài nguyên thất bại"
            })
        }
        return res.json({
            message: "Lấy tài nguyên thành công",
            sale
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

export const getOneSale = async( req, res) => {
    try {
        const sale = await saleModel.findById(req.params.id);
        if(!sale) {
            return res.status(400).json({
                message: "Lấy tài nguyên thất bại"
            })
        }
        return res.json({
            message: "Lấy tài nguyên thành công",
            sale
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

export const deleteSale = async( req, res) => {
    try {
        const sale = await saleModel.findByIdAndDelete(req.params.id);
        return res.json({
            message: " Xoá tài nguyên thành công",
            sale
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


export const createSale = async( req, res) => {
    try {
        const { error} = validateSale.validate(req.body, { abortEarly: false });
        if(error) {
            const errors = error.details.map((err) => err.message);
            return res.status(404).json({
                message: errors
            })
        }
        const sale = await saleModel.create(req.body);
        if(!sale) {
            return res.status(400).json({
                message: "Thêm tài nguyên thất bại"
            })
        }
        return res.json({
            message: " Thêm tài nguyên thành công",
            sale
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


export const updateSale = async( req, res) => {
    try {
        const { error} = validateSale.validate(req.body, { abortEarly: false });
        if(error) {
            const errors = error.details.map((err) => err.message);

            return res.status(404).json({
                message: errors.details[0].message
            })
        }
        const sale = await saleModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        if(!sale) {
            return res.status(400).json({
                message: "Cập nhật tài nguyên thất bại"
            })
        }
        return res.json({
            message: " Cập nhật tài nguyên thành công",
            sale
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}