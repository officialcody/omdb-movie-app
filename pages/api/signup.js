import initDB from "../../helpers/initDB";
import User from "../../models/User";
import bcrypt from "bcryptjs";

initDB();

export default async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if(!name || !email || !password){
            res.status(422).json({error: "Please add all the fields."});
        }
        const user = await User.findOne({email});
        if(user){
            res.status(422).json({error: "User already exists."});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await new User({
            name, email, password: hashedPassword
        }).save();
        res.status(201).json({message:"Signed up successfully" ,success: true});
    } catch (error) {
        console.log(error)
    }
}