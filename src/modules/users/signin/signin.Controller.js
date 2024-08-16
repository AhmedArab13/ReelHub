import { userModel } from "../../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signin = async (req, res) => {


    const {email , password} = req.body;

    let user  = await userModel.findOne({email});

    if (!user) {
        return res.status(404).json({message : 'user not found'});
    }else{

        bcrypt.compare(password, user.password , function(err, result) {
            
            if(result){

                let token = jwt.sign({id : user._id} , process.env.MY_SECRET_KEY );
                return res.status(200).json({message : 'sucess' , token});
            }else{
                return res.status(404).json({message : 'password not correct'});
            }
        });
    }
}