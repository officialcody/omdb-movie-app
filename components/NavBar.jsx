import React from 'react';
import { parseCookies } from 'nookies';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import SearchBar from './SearchBar';

const NavBar = ({ setMovies }) => {
    const router = useRouter();
    const { token } = parseCookies();
    let user = false;

    if(token){
        user = true;
    } else {
        user = false;
    }

    return (
        <ul className="nav p-2">
            <li className="nav-item">
                <Link href={"/"}><a className="nav-link active" >OMDB MOVIE APPLICATION</a></Link>
                {user ? <>
                <SearchBar setMovies={setMovies} />
                <button className='btn btn-primary' onClick={() => {
                    cookie.remove('token');
                    router.push('/');
                    toast.info("You have logged out");
                }}>logout</button>
                </> : <>
                <Link href={"/login"}><button className="btn btn-primary" >Login</button></Link>
                <Link href={"/signup"}><button className="btn btn-primary" >Signup</button></Link>
                </>}
            </li>
        </ul>
    )
}

export default NavBar;