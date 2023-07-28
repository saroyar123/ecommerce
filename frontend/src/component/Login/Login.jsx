import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../action/userAction';
import { Link, redirect, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginAction(email,password));
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='email' placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        <Link to={'/register'} className='link'>Register</Link>
      </form>
    </div>
  )
}

export default Login