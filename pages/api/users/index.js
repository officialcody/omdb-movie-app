import initDB from "../../../helpers/initDB";
import User from "../../../models/User";

initDB();

export default async (req,res)=>{
     try{
        const users = await User.find({});
        res.status(201).json(users);
     }catch(err){
         console.log(err);
     }
}