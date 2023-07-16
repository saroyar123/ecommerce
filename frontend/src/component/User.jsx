import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

const User = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookie = Cookies.get('token');
        console.log(cookie);
        const response = await axios.get('http://localhost:4000/api/v1/user', {
          headers: {
            token: cookie,
          },
        });
        console.log(cookie);
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>{data.user.name}</div>;
};

export default User;
