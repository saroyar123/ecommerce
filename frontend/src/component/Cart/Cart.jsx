import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../CartProduct/CartProduct'
import OrderButton from '../OrderButton/OrderButton'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate=useNavigate();
  const {data}=useSelector((state)=>state.user);
  if(data.success==false)
  {
    navigate('/')
  }
  return (
    <div>
      {
      data.user&&data.user.cart&&data.user.cart.products.length>0?<>
      {data.user.cart.products.map((product)=>(
        <CartProduct
        key={product._id._id}
        id={product._id._id}
        quantity={product.quantity}
        name={product._id.name}
        description={product._id.description}
        avatar={product._id.avatar}
        />  
      ))}
      <h1>{data.user.cart.totalItem}</h1>
      <h1>{data.user.cart.totalPrice}</h1>
      <h1>{data.user.cart.status}</h1>
      <OrderButton
      text={"Order Now"}
      amount={2500}
      />
      </>:<h1>Add some product to Cart</h1>
      }</div>
  )
}

export default Cart