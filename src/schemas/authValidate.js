import joi from "joi"

export const signupSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Name không được để trống !",
        "string.base": "Name phải đúng kiểu chữ !",
        "any.required": "Trường Name là bắt buộc !"
    }),
    email: joi.string().email().required().messages({
        "string.base": "Email phải đúng kiểu chữ !",
        "string.email": "Email không đúng định dạng !",
        "string.empty": "Email không được để trống !",
        "any.required": "Trường Email là bắt buộc !",
    }),
    password: joi.string().required().min(6).messages({
        "string.base": "password phải là kiểu chữ !",
        "string.min": "Password phải có ít nhất {#limit} ký tự !",
        "string.empty": "Password không được để trống !",
        "any.required": "Trường Password là bắt buộc !",
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "any.required": "Trường confirmPassword là bắt buộc !",
        "any.only": "Password không khớp !",
    })
});