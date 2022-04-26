import initDB from '../../helpers/initDB';
import User from '../../models/User';
import jwt from 'jsonwebtoken';
import Playlist from '../../models/Playlist';
import Movie from '../../models/Movie';

initDB();

export default async (req,res)=>{
    const { imdbID } = req.body;
    const { token } = req.headers;
     try{
        if(!token){
          return res.status(422).json({error:"Bad Request"});
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user_id = decode.userId;
        const user = await User.findById(user_id);
        
        const playlist = await Playlist.findById(user.playlist);
        const url = `https://omdbapi.com/?i=${imdbID}&apikey=${process.env.API_KEY}`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const movie = await new Movie({title: jsonResponse.Title, imdbID, year: jsonResponse.Year, poster: jsonResponse.Poster}).save();
        playlist.movies.push(movie._id);
        await playlist.save();
        await playlist.populate('movies');
        res.status(200).json(playlist);
     }catch(err){
         console.log(err);
     }
}