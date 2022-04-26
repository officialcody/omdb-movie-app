import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const AllMovies = ({ token, movies }) => {
    let user = false;
    if(token){
        user = true;
    } else {
        user = false;
    }
    return (
        <div className="container bg-secondary">
            <div className="row row-cols-1 row-cols-md-3 g-2">
            { movies &&
                movies.map((movie, index)=>(
                    <div key={index} className="col">
                        <Movie token={token} movie={movie} />
                    </div>
                    )
                )
            }
            </div>
        </div>
    )
}

AllMovies.propTypes = {
    movies: PropTypes.array,
}

export default AllMovies