import initDB from "../../helpers/initDB";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import Playlist from "../../models/Playlist";
import mongoose from 'mongoose';

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
        const defaultPlaylist = await new Playlist({
            type: 'Public', movies: []
        }).save();
        const newUser = await new User({
            name, email, password: hashedPassword, playlist: defaultPlaylist._id,
        }).save();
        mongoose.connection.db.createCollection("movies", (err)=>err);
        res.status(201).json({ message:"Signed up successfully" ,success: true });
    } catch (error) {
        console.log(error)
    }
}