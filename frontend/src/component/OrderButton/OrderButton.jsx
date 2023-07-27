import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import {redirect}from 'react-router-dom'
const cookie=Cookies.get("token")

const OrderButton = ({text,amount}) => {
    const paymentButtonHandller=async(e)=>{
        e.preventDefault();

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/v1/payment",{
            headers:{
                token:cookie
            }
        })

        const { data:{order} } = await axios.post("http://localhost:4000/api/v1/payment", {
            amount:2500
        },{
            headers:{
                token:cookie
            }
        })

        console.log(order.id,key)

        if (order.id) {
            const options = {
              key,
              amount: order.amount,
              currency: "INR",
              name: "6 Pack Programmer",
              description: "ecommerce website",
              image: "https://avatars.githubusercontent.com/u/25058652?v=4",
              order_id: order.id,
              callback_url: "http://localhost:4000/api/v1/verification",
              prefill: {
                name: "SAROYAR HOSSAIN SHAIKH",
                email: "yarsaro2001@gmail.com",
                contact: "9999999999"
              },
              notes: {
                "address": "Razorpay Corporate Office"
              },
              theme: {
                "color": "#121212"
              }
            };
    
            if (window.Razorpay) {
              const razor = new window.Razorpay(options);
              
               await razor.open();
               redirect('/order')

            } else {
              console.log("Razorpay library not loaded.");
            }

           

    }
   
  
  }
  return (
    <>
    <button onClick={paymentButtonHandller}>{text}</button>
    </>
  )
}

export default OrderButton