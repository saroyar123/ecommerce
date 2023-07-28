import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserAction } from '../../action/userAction';

const Account = () => {
  const navigate=useNavigate();
  const {user}=useSelector((state)=>state.user.data);
  const dispatch=useDispatch();
  console.log(user)
  const logOuthandller=(e)=>{
    e.preventDefault();
    Cookies.remove("token");
    dispatch(getUserAction());

    navigate('/')
  }

  return <>
  <div>{user.name}</div>
  <button onClick={logOuthandller}>LogOut</button>
  </>;
};

export default Account;
