import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Modal = ({ id }) => {

    const [movie, setMovie] = useState({});

    const getMovieDetails = async () => {
        const url = `https://omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setMovie(jsonResponse);
    }

    useEffect(() => {
        getMovieDetails();
    }, [movie])
    
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Movie: {movie.Title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={movie.Poster} className="img-fluid rounded-start" alt="poster not available" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title">{movie.Title}</h5>
                                <p className="card-text">{movie.Plot}</p>
                                <p className="card-text"><small className="text-muted">{movie.Released}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    id: PropTypes.string,
}

export default Modal;