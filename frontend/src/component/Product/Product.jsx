import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction, createCartAction } from '../../action/cartAction';
import { getUserAction } from '../../action/userAction';

const Product = ({id,name, description }) => {
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
