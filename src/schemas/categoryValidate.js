import Joi from "joi";
const validateCategory = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required().trim().messages({
    "string.empty": "Trường name không được bổ trống",
    "any.required": "Trường name bắt buộc phải nhập",
  }),
  image: Joi.string().required().trim().messages({
    "string.empty": "Trường image không được bổ trống",
    "any.required": "Trường image bắt buộc phải nhập",
  }),
});
export default validateCategory;
