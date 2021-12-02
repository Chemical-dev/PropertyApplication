// import express, { Request, Response } from "express"
// import { UUIDV4 } from "sequelize/dist";
// const router = express.Router();
// import db from "../config/config";
import { User } from "../models/user";




import express ,{Request,Response}from "express";
import { v4 as uuidv4 } from 'uuid';
import db from "../config/config";
import jwt from "jsonwebtoken"
const app = express();

export async function register(req: Request, res: Response){
    console.log("i am here");
    const id = uuidv4()
    const { username, email, password } = req.body;
    const result = await User.findAll({where: {username: username}},(err:Error, result:User)=>{
        if (result.rows[0]) {
            return res.status(400).json({success: false, error: "User already exists"})
        };
    })
  
    
    const user = await User.create(
        { id, email, username, password})
        const accesstoken = jwt.sign({username: username}, "secret")

        return res.status(200).json({success: true, accesstoken: accesstoken });
}

// export async function login(req: Request, res: Response){
//       const {username, password} = req.body;
//       const user = await pool.query(`SELECT username FROM users WHERE username=$1`, [username],(err,result)=>{
//         if (!result.rows[0]) {
//             return res.status(400).json({success: false, error: "User does not exist!"})
//         };
//     } f
// };
export async function login(req: Request, res: Response){
    const { username, password } = req.body;
    const result = await User.findAll({where: {username: username}},(err:Error, result:User)=>{
        if (!result.rows[0]) {
            return res.status(400).json({success: false, error: "User does not exist!"})
        };
    })
        try {
            const passwordcheck = await User.define({User}, {getterMethods:{password}}, (err:Error, passwordcheck:string)=>{
                if (passwordcheck === password){
                    const accesstoken = jwt.sign({username: username}, "secret")
                    return res.status(200).json({success: true, accesstoken: accesstoken });
                }else{
                    return res.status(400).json({success: false, err: "Invalid password!" });
                }
            }) 
            
        } catch (err) {
            return res.status(400).json({succes: false, error: "Internal server error"})
            
        }

    }




