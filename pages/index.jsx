import NavBar from '../components/NavBar';
import AllMovies from '../components/AllMovies';
import Head from 'next/head';
import React, {useState, useEffect} from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [formInput, setFormInput] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  
  const getMovies = async () => {
      const url = `https://omdbapi.com/?s=avengers&apikey=${process.env.API_KEY}`;
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setMovies(jsonResponse.Search);
  }

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

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <Head>
        <title>OMDB Movie App</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      </Head>
      <NavBar />
      <div className='container'>
        <div className="row">
          <div className="col-4">
            <form onSubmit={searchMovieByTerm}>
              <input type="text" name="searchTerm" value={searchTerm} onChange={handleSearchInput} required />
              <button type='submit'>Search</button>
            </form>
          </div>
        </div>
      </div>
      <AllMovies movies={movies} />
    </>
  )
}

export default Home;
