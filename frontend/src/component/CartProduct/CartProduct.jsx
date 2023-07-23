import axios from 'axios'
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
const cookie=Cookies.get("token")

const CartProduct = async({id}) => {
  const [data, setData] = useState(null); // Use null as the initial state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookie = Cookies.get("token");
        const response = await axios.get(`http://localhost:4000/api/v1/product/${id}`, {
          headers: {
            token: cookie
          }
        });
        setData(response.data);
      } catch (error) {
        // Handle any errors if needed
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div>CartProduct</div>
  )
}

export default CartProduct