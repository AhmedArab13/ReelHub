import Joi from "joi";



export const signupValidatorSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().required(),
    password: Joi.string().required(),
    respassword: Joi.ref("password"),
});