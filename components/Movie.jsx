import React from 'react';
import Modal from './Modal';

const Movie = ({ movie }) => {
  return (
    <div className="card">
        <img height="350" src={movie.Poster} className="card-img-top" alt="image not available" />
        <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#"+movie.imdbID}>Show Details</button>
            <Modal id={movie.imdbID} />
        </div>
    </div>
  )
}

export default Movie