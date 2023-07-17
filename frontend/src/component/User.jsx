import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

const User = () => {
  const [data, setData] = useState('');

  useEffect(() => {
        const cookie = Cookies.get('token');
        axios.get('https://ecommerce-backend-v820.onrender.com/api/v1/user', {
          headers: {
            token: cookie,
          },
        }).then((response)=>setData(response.data));
        console.log(data)
  }, []);

  return <div>user</div>;
};

export default User;
