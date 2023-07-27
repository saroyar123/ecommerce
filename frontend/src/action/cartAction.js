import axios from "axios";
import Cookies from "js-cookie";
const cookie=Cookies.get("token")

export const createCartAction=()=>async(dispatch)=>{
    try {
        console.log("create cart call");
        dispatch({
            type:"createCartRequest"
        })
        
        const {data}=await axios.post("http://localhost:4000/api/v1/cart",{},{
            headers:{
                token:cookie
            }
        });

        dispatch({
            type:"createCartSuccess",
            playload:data
        })
        console.log("create cart call");
        
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: "createCartFailure",
            playload: error.response.data,
          });
    }
}


export const addToCartAction=(id)=>async(dispatch)=>{
try {
    dispatch({
        type:"addToCartRequest"
    })
    
    
    const {data}=await axios.get(`http://localhost:4000/api/v1/cart/add/${id}`,{
        headers:{
            token:cookie
        }
    });

    dispatch({
        type:"addToCartSuccess",
        playload:data
    })
    console.log("add to cart call");
} catch (error) {
    dispatch({
        type: "addToCartFailure",
        playload: error.response.data,
      });
}
}


export const deleteFromCartAction=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"deleteFromCartRequest"
        })

        console.log("call",cookie,id)
        const {data}=await axios.delete(`http://localhost:4000/api/v1/cart/delete/${id}`,{
            headers:{
                token:cookie
            }
        });
    
        dispatch({
            type:"deleteFromCartSuccess",
            playload:data
        })
        console.log("add to cart call");
    } catch (error) {
        dispatch({
            type: "deleteFromCartFailure",
            playload: error.response.data,
          });
    }
    }