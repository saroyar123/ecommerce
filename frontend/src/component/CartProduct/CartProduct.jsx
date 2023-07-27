import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction, deleteFromCartAction } from '../../action/cartAction';
import { getUserAction } from '../../action/userAction';

const CartProduct =({id,quantity,name,description}) => {
  const dispatch=useDispatch();
  
  const deleteFromCartHandler=async()=>{
   await dispatch(deleteFromCartAction(id));
   dispatch(getUserAction());
  }

  const addToCartHandler=async()=>{
  await dispatch(addToCartAction(id));
  dispatch(getUserAction())

  }
  return (
    <div>
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