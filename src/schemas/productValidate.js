import Joi from "joi";
const validateProduct = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required().trim().messages({
    "string.empty": "Trường name không được bổ trống",
    "any.required": "Trường name bắt buộc phải nhập",
  }),
  price: Joi.number().required().messages({
    "string.empty": "Trường price không được bổ trống",
    "any.required": "Trường price bắt buộc phải nhập",
  }),
  image: Joi.string().messages({
    "string.empty": "Trường image không được bổ trống",
    "any.required": "Trường image bắt buộc phải nhập",
  }),
  description: Joi.string().messages({
    "string.empty": "Trường description không được bổ trống",
    "any.required": "Trường desciption bắt buộc phải nhập",
  }),
  categoryId: Joi.string().required().messages({
    "string.empty": "Trường category không được bổ trống",
    "any.required": "Trường category bắt buộc phải nhập",
  }),
});
export default validateProduct;
