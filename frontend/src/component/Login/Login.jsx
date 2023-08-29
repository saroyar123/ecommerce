import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../action/userAction';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="Form">
        <input
          className="inputClass"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputClass"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Sign In
        </Button>
        <Link to={'/register'} className="link">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
