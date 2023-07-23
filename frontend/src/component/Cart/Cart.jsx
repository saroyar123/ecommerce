import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../CartProduct/CartProduct'

const Cart = () => {
  const {data}=useSelector((state)=>state.user)
  console.log(data.user)
  return (
    <div>
      {
      data.user.cart?<>
      {data.user.cart.products.map((product)=>(
        <>
        <h1>{product.quantity}</h1>
        </>
      
        
      ))}
      <h1>{data.user.cart.totalItem}</h1>
      <h1>{data.user.cart.status}</h1>
      </>:<h1>Add some product to Cart</h1>
      }</div>
  )
}

export default Cart