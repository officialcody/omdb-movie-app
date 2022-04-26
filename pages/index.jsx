import NavBar from '../components/NavBar';
import AllMovies from '../components/AllMovies';
import MyPlaylists from '../components/MyPlaylists';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import React, {useState, useEffect} from 'react';

const Home = () => {
  const { token } = parseCookies();
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
    <>
      <Head>
        <title>OMDB Movie App</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      </Head>
      <NavBar token={token} setMovies={setMovies} />
      <MyPlaylists token={token} />
      <AllMovies token={token} movies={movies} />
    </>
  )
}

export default Home;
