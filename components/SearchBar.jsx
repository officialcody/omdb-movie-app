import React, {useState} from 'react';

const SearchBar = ({ setMovies }) => {
    const [formInput, setFormInput] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInput = (event) => {
        let {name, value} = event.target;
        setFormInput({...formInput, [name]: value});
        setSearchTerm(event.target.value);
      }
    
    const searchMovieByTerm = async (event) => {
        event.preventDefault();
        let movies = await fetch(`https://omdbapi.com/?s=${searchTerm}&apikey=${process.env.API_KEY}`);
        movies = await movies.json();
        setMovies(movies.Search);
    }

    return (
        <>
            <form onSubmit={searchMovieByTerm}>
                <input type="text" name="searchTerm" value={searchTerm} onChange={handleSearchInput} required />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}

export default SearchBar