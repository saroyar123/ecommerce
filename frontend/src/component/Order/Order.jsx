import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../../action/userAction';
import Loading from '../Loading/Loading';
import './Order.css'
import { Avatar } from '@mui/material';

const Order = () => {
  const {loading,data}=useSelector((state)=>state.user)
  // console.log(user.success)
  return (
    <div>{
     loading?<Loading/>:data&&data.success&&data.user.ordered&&data.user.ordered.length>0?
      <>
      {
        data.user.ordered.map((order)=>(
      <div className='orderItems'>
        {/* <img src={order.cartId.products[0]._id.avatar.url} width="50" height="50" /> */}
        <div>
        {/* <h3>{order.cartId.products[0]._id.name}&other</h3> */}
          <h3>{order.status}</h3>
        </div>
          <button>Details</button>
      </div>
        ))
      }
      </>:<h1>Buy some product</h1>
      }</div>
  )
}

export default Order

