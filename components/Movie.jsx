import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Movie = ({ token, movie }) => {
  let user = false;
  if(token){
    user=true;
  } else {
    user=false;
  }
  return (
    <div className="card">
        <img height="350" src={movie.Poster} className="card-img-top" alt="image not available" />
        <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#"+movie.imdbID}>Show Details</button>
            {user && <button className='btn btn-primary'>+</button>}
            <Modal id={movie.imdbID} />
        </div>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.object,
}

export default Movie