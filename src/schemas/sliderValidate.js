import Joi from "joi";

const validateSlider = Joi.object({
    _id: Joi.string(),
    name: Joi.string().required().trim().messages({
        "string.empty": "Trường Name không được bỏ trống !!",
        "any.required": "Trường Name bắt buộc phải nhập !!",
    }),
    image: Joi.string().required().trim().messages({
        "string.empty": "Trường Image không được bỏ trống !!",
        "any.required": "Trường Image bắt buộc phải nhập !!",
    }),
    ratio: Joi.string().required().trim().messages({
        "string.empty": "Trường Ratio không được bỏ trống !!",
        "any.required": "Trường Ratio bắt buộc phải nhập !!",
    }),
    description: Joi.string().required().trim().messages({
        "string.empty": "Trường Description không được bỏ trống !!",
        "any.required": "Trường Description bắt buộc phải nhập !!",
    }),
});
export default validateSlider