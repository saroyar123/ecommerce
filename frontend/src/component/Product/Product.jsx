import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction, createCartAction } from '../../action/cartAction';
import { getUserAction } from '../../action/userAction';
import { Avatar } from '@mui/material';

const Product = ({id,name, description,avatar }) => {
  const dispatch=useDispatch();
  const {data}=useSelector((state)=>state.user)

  const cartSubmitHandler = async (e) => {
    e.preventDefault();
    if(data.user.cart==null)
    {
      await dispatch(createCartAction());
      await dispatch(addToCartAction(id));
      dispatch(getUserAction());
    }
    else{
      await dispatch(addToCartAction(id));
      dispatch(getUserAction())
    }
  }

  const productDetails=async()=>{
   
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
        <button onClick={productDetails}>Details</button>
      <button onClick={cartSubmitHandler} >Add to Cart</button>
      </div>
      
    </div>
  );
};

export default Product;
