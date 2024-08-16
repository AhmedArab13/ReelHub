import {userModel} from "../../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import Joi from "joi";

import { signupValidatorSchema } from "./signup.validator.js";

export const signup = async (req, res) => {
  const { firstName , lastName ,  email , age , password } = req.body;

  let user = await userModel.findOne({ email });
  if(user) {
    return res.json({ message: "Email already exists" });
  }else{

    bcrypt.hash(password, 8 ,async function(err, hash) {
      // Store hash in your password DB.
      if(err){
        return res.json({ message: "Error in hashing password" });
      }else{
       await userModel.insertMany({ firstName , lastName ,  email , age , password: hash });
       return res.json({ message: "User created successfully" });
      }
  });
  }
  
};
