import Link from 'next/link';
import React, {useState} from 'react';
import { toast } from 'react-toastify';
import baseUrl from '../helpers/baseUrl';
import { useRouter } from 'next/router';

const Signup = ()=> {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router  = useRouter();

  const userSignup = async(e)=>{
    e.preventDefault()
    const res =   await fetch(`${baseUrl}/api/signup`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    })

        const res2 = await res.json();
        if(res2.error){
            toast.error(res2.error);
        }else{
            toast.success(res2.message);
            router.push('/login')
        }
    }
    return(
      <div>
        <form className='container mt-4' onSubmit={(e)=>userSignup(e)}>
            <div className="row">
                <div className="col-6">
                    <div className="form-outline mb-4">
                        <label className="form-label">Name</label>
                        <input type="text" name='name' value={name} className="form-control" onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input type="email" name='email' value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" name='password' value={password} className="form-control" onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>
                    <div className="text-center">
                        <p>Already a member? <Link href={"/signup"}><a >Login</a></Link></p>
                    </div>
                </div>
            </div>
        </form>
      </div>
    )
  }
  
  export default Signup