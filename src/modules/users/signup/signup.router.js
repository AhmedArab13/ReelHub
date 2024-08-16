import express from "express";
import { signupValidatorSchema } from "./signup.validator.js";
import {signup} from "./signup.Controller.js";
import { validate } from "../../../middleware/validation.js";
let  signUpRouter = express.Router();




signUpRouter.post("/signup" ,  validate(signupValidatorSchema) , signup);;



export {
    signUpRouter
}