import express from "express";
import {validate} from '../../../middleware/validation.js' ;
import {signinValidatorSchema}  from './signin.validator.js' ;
import {signin} from './signin.Controller.js' ; 
let signInRouter  = express.Router();




signInRouter.post('/signin' , validate(signinValidatorSchema) , signin  ) 










export {signInRouter};
