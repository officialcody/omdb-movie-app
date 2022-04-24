import Link from 'next/link';
import React, {useState} from 'react';
import baseUrl from '../helpers/baseUrl';
import { toast } from 'react-toastify';
import cookie from 'js-cookie'
import {useRouter} from 'next/router';

const Login = ()=>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const router  = useRouter()

    const userLogin = async (e) => {
        e.preventDefault();
        const res =  await fetch(`${baseUrl}/api/login`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
        });
    
        const res2 = await res.json()
        if(res2.error){
          toast.error(res2.error);
        }else{
           toast.success("You have successfully logged in");
           cookie.set('token',res2.token);
           cookie.set('user',res2.user);
           router.push('/');
        }
    }

    return(
    <div>
        <form className='container mt-4' onSubmit={(e)=>userLogin(e)}>
            <div className="row">
                <div className="col-6">
                    <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input type="email" name='email' value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" name='password' value={password} className="form-control" onChange={(e)=>setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                    <div className="text-center">
                        <p>Not a member? <Link href={"/signup"}><a >Register</a></Link></p>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
  }
  
  export default Login