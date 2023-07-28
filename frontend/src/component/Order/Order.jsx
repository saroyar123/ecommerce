import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../../action/userAction';

const Order = () => {
  // const {user}=useSelector((state)=>state.user.data)
  // const dispatch=useDispatch();
  // useEffect(()=>{
  //   if(user.cart==null)
  //   {
  //     dispatch(getUserAction())
  //   }
  // },[dispatch,getUserAction,user.cart])
  return (
    <div>Order</div>
  )
}

export default Order