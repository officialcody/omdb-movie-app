import initDB from "../../../helpers/initDB";
import Playlist from "../../../models/Playlist";

initDB();

export default async (req,res)=>{
     try{
        const playlists = await Playlist.find({type: 'Public'}).populate('movies');
        res.status(201).json(playlists);
     }catch(err){
         console.log(err);
     }
}