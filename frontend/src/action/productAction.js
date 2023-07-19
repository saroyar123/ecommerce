import axios from "axios";

export const getAllProductAction=()=>async(dispatch)=>{
    try {

        dispatch({
            type:"allProductRequest"
        })

        console.log("get all product api is call");

        
        const {data}=await axios.get("http://localhost:4000/api/v1/product");

        dispatch({
            type:"allProductSuccess",
            playload:data
        })
        console.log("get all product api is call2");
        
    } catch (error) {
        dispatch({
            type: "allProductFailure",
            playload: error.response.data,
          });
    }
}