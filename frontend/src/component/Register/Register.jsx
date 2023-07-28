import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerAction } from '../../action/userAction';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

const Register = () => {
    const navigate=useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [city,setCity]=useState("");
    const [pin,setPin]=useState(0);
    const [landmark,setLandmark]=useState("")
    const [avatar,setAvatar]=useState("")


    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
    
        Reader.onload = () => {
            console.log("image set")
          if (Reader.readyState === 2) {
            setAvatar(Reader.result);
          }
        };
      };

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerAction(name, email, password,city,pin,landmark,avatar));
        navigate('/')
    }
    return (
        <>

            <form onSubmit={submitHandler} className='Form'>
                <Avatar
                    src={avatar}
                    alt="User"
                    sx={{ height: "10vmax", width: "10vmax" }}
                />

                <input type="file" accept="image/*" onChange={handleImageChange} />
                <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='email' placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder='city' value={city} onChange={(e) => setCity(e.target.value)} />
                <input type='number' placeholder='pin' value={pin} onChange={(e) => setPin(e.target.value)} />
                <input type='text' placeholder='Landmark' value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                <button type='submit'>register</button>
            </form>
        </>
    )
}

export default Register