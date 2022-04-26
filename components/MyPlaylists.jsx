import React, { useState, useEffect } from 'react';
import baseUrl from '../helpers/baseUrl';

const MyPlaylists = ({ token }) => {
    const [movies, setMovies] = useState([]);

    const getmyplaylist = async() => {
        const res =   await fetch(`${baseUrl}/api/getmyplaylist`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json",
              "token": token
            },
        });
        console.log(res.json());
        // setMovies(res.movies);
    }

    useEffect(()=>{
        getmyplaylist();
    }, [movies]);

    let user = false;
    if(token){
        user = true;
    } else {
        user = false;
    }

    return (
        <>
            {
            user && <>
            <div className='container'>
                <div className="row">
                    <div className="col bg-dark">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    My Playlist
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            }
        </>
    )
}

export default MyPlaylists