import Joi from "joi";

const validateSale = Joi.object({
    _id: Joi.string(),
    name: Joi.string().required().trim().messages({
        "string.empty": "Trường name không được bỏ trống",
        "any.required": "Trường name bắt buộc nhập"
    }),
    image: Joi.string().required().trim().messages({
        "string.empty": "Trường image không được bỏ trống",
        "any.required": "Trường image bắt buộc phải nhập"
    }),
    timeSale: Joi.string().required().trim().messages({
        "string.empty": "Trường thời gian sale không được để trống",
        "any.required": "Trường thời gian sale bắt buộc nhập"
    })
})

export default validateSale
