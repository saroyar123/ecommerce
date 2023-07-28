import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserAction } from '../../action/userAction';
import { Avatar } from '@mui/material';
import Loading from '../Loading/Loading';

const Account = () => {
  const navigate=useNavigate();
  const {data}=useSelector((state)=>state.user);
  useEffect(()=>{
    if(data.success==false)
    {
      navigate('/')
    }
  },[data])
  const { user } = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  console.log(user)
  const logOuthandller = async(e) => {
    e.preventDefault();
     Cookies.remove('token')
     
   dispatch(getUserAction());
  }

  return(
    <>
    {
      user?(  <>
        <div>{user.name}</div>
        <Avatar
          src={user.avatar.url}
          sx={{ height: "8vmax", width: "8vmax" }}
        />
        <button onClick={logOuthandller}>LogOut</button>
      </>):<Loading/>
    }
    </>
  )
};

export default Account;
