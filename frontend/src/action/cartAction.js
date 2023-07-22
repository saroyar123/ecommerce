import axios from "axios";
import Cookies from "js-cookie";

export const createCartAction=()=>async(dispatch)=>{
    try {

        dispatch({
            type:"careateCartRequest"
        })

        console.log("cart api is call");
        const cookie=Cookies.get("token")
        
        const {data}=await axios.get("http://localhost:4000/api/v1/cart",{
            headers:{
                token:cookie
            }
        });

        dispatch({
            type:"careateCartSuccess",
            playload:data
        })
        console.log("call2");
        
    } catch (error) {
        dispatch({
            type: "careateCartFailure",
            playload: error.response.data,
          });
    }
}


export const addToCartAction=(id)=>async(dispatch)=>{
try {
    dispatch({
        type:"addToCartRequest"
    })

    console.log("cart api is call");
    const cookie=Cookies.get("token")
    
    const {data}=await axios.get(`http://localhost:4000/api/v1/cart/add/${id}`,{
        headers:{
            token:cookie
        }
    });

    dispatch({
        type:"addToCartSuccess",
        playload:data
    })
    console.log("call2");
} catch (error) {
    dispatch({
        type: "addToCartFailure",
        playload: error.response.data,
      });
}
}