import React, {useState, useEffect} from 'react';
import Movie from './Movie';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const url = `https://omdbapi.com/?s=avengers&apikey=${process.env.API_KEY}`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setMovies(jsonResponse.Search);
    }

    useEffect(() => {
      getMovies();
    }, [])
    
    return (
        <div className="container bg-secondary">
            <div className="row row-cols-1 row-cols-md-3 g-2">
                { movies.map((movie, index)=>(<div key={index} className="col"><Movie  movie={movie} /></div>))}
            </div>
        </div>
    )
}

export default AllMovies