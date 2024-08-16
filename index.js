import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

import cors from 'cors' ;

import {dbConnection} from "./database/dbConnection.js";
import { signUpRouter } from "./src/modules/users/signup/signup.router.js";
import { signInRouter } from "./src/modules/users/signin/signin.router.js";


const app = express();
const port = 3001;



dbConnection();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // allow requests from this origin
    credentials: true, // allow credentials (e.g., cookies) to be sent
  
  }));
  


// Routes

app.use('/users' ,signUpRouter);
app.use('/users' ,signInRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});