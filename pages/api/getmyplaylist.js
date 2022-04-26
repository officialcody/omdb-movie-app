import initDB from '../../helpers/initDB';
import User from '../../models/User';
import jwt from 'jsonwebtoken';
import Playlist from '../../models/Playlist';

initDB();

export default async (req,res)=>{
    const { token } = req.headers;
     try{
        if(!token){
          return res.status(422).json({error:"Bad Request"});
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user_id = decode.userId;
        const user = await User.findById(user_id);
        const playlist = await Playlist.findById(user.playlist);
        await playlist.populate('movies');
        res.status(200).json(playlist);
     }catch(err){
         console.log(err);
     }
}