import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerAction } from '../action/userAction';

const Register = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    const dispatch=useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
      dispatch(registerAction(name,email,password))
    }
    return (
        <>

            <form onSubmit={submitHandler}>
                <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type='email' placeholder='example@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button type='submit'>register</button>
            </form>
        </>
    )
}

export default Register