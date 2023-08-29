import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createOrderAction } from '../../action/orderAction'
import { getUserAction } from '../../action/userAction'
const cookie = Cookies.get("token")

const OrderButton = ({ text,cartId ,amount }) => {
  const { user } = useSelector((state) => state.user.data);
  const [paymentId,setPaymentId]=useState(null);
  const [orderId,setOrderId]=useState(null);
  const [signature,setSignature]=useState(null);

  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getUserAction())
  // },[dispatch,getUserAction])
  const paymentButtonHandller = async (e) => {
    e.preventDefault();

    const { data: { key } } = await axios.get("http://www.localhost:4000/api/v1/payment", {
      headers: {
        token: cookie
      }
    })

    const { data: { order } } = await axios.post("http://localhost:4000/api/v1/payment", {
      amount
    }, {
      headers: {
        token: cookie
      }
    })

    console.log(order.id, key)


    if (order.id) {
      var options = {
        "key": key, // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id":order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response) {
          alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)

            setPaymentId(response.razorpay_payment_id);
            setOrderId(response.razorpay_order_id);
            setSignature(response.razorpay_signature);
  
            console.log(cartId,paymentId,orderId,signature)
            
            // dispatch(createOrderAction(cartId,paymentId,orderId,signature))
            axios.post("http://localhost:4000/api/v1/order",{cartId,paymentId,orderId,signature},{
              headers:{
                  token:cookie
              }
          }).then((data)=>{
            console.log(data)
            dispatch(getUserAction())
          });
          

          
        },
        "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };
     
    }

    if (window.Razorpay) {
      var rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function () {
        alert("Payment Faild");
      });
      await rzp1.open();
      await dispatch(getUserAction())
      
      redirect('/order')


    } else {
      console.log("Razorpay library not loaded.");
    }



  }



return (
  <>
    <button onClick={paymentButtonHandller}>{text}</button>
  </>
)
}

export default OrderButton