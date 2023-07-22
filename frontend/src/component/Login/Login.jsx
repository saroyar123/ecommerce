import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../action/userAction';
import { redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginAction(email,password));
    redirect("/")
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='email' placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login