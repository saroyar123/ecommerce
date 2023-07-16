import axios from "axios";
import Cookies from "js-cookie"


export const registerAction=(name,email,password)=>async(dispatch)=>{
    try {

        dispatch({
            type:"userRequest"
        })

        console.log("user api is call");

        const {data}=await axios.post("http://localhost:4000/api/v1/user",{name,email,password});
        Cookies.set("token",data.token,{ expires: 7 })
        console.log(data)

        dispatch({
            type:"userSuccess",
            playload:data
        })
        
    } catch (error) {
        dispatch({
            type: "userFailure",
            playload: error.response.data,
          });
    }
}