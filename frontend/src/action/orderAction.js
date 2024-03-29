import axios from "axios";
import Cookies from "js-cookie";
const cookie=Cookies.get("token")

export const createOrderAction=(cartId,paymentId)=>async(dispatch)=>{
    try {
        console.log("create order call");
        dispatch({
            type:"createOrderRequest"
        })
        
        const {data}=await axios.post("http://localhost:4000/api/v1/order",{cartId,paymentId,orderId,signature},{
            headers:{
                token:cookie
            }
        });

        dispatch({
            type:"createOrderSuccess",
            playload:data
        })
        console.log("create cart call end");
        
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: "createOrderFailure",
            playload: error.response.data,
          });
    }
}