import initDB from '../../helpers/initDB';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

initDB();

export default async (req,res)=>{
     const { email, password } = req.body;
     try{
        if(!email || !password){
          return res.status(422).json({error:"Please fill all the fields"});
        }
        const user = await User.findOne({email});
        if(!user){
          return res.status(404).json({error:"User doesnot exists."});
        }
        const match =  await bcrypt.compare(password,user.password);
        if(match){
           const token =  jwt.sign({userId:user._id},process.env.JWT_SECRET,{
                expiresIn:"7d"
            });
            const { _id, name, email, playlist } = user;
            res.status(201).json({ token, user:{ _id, name, email , playlist} });
        }else{
           return res.status(401).json({error:"Email or password doesnot match"});
        }
     }catch(err){
         console.log(err);
     }
}