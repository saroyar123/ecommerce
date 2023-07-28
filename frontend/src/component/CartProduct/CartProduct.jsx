import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction, deleteFromCartAction } from '../../action/cartAction';
import { getUserAction } from '../../action/userAction';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CartProduct =({id,quantity,name,description,avatar}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {data}=useSelector((state)=>state.user);
  if(data.success==false)
  {
    navigate('/')
  }
  
  const deleteFromCartHandler=async(e)=>{
    e.preventDefault();
   await dispatch(deleteFromCartAction(id));
   dispatch(getUserAction());
  }

  const addToCartHandler=async(e)=>{
    e.preventDefault();
  await dispatch(addToCartAction(id));
  dispatch(getUserAction())

  }
  return (
    <div>
          <Avatar
          src={avatar.url}
          sx={{ height: "8vmax", width: "8vmax" }}
        />
      <h1>{name}</h1>
      <h3>{description}</h3>
      <div>
        <button onClick={deleteFromCartHandler}>-</button>
        <h3>{quantity}</h3>
        <button onClick={addToCartHandler}>+</button>
      </div>
    </div>
  )
}

export default CartProduct