import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerAction } from '../../action/userAction';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [city,setCity]=useState("");
    const [pin,setPin]=useState(0);
    const [landmark,setLandmark]=useState("")

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerAction(name, email, password,city,pin,landmark));
        navigate('/')
    }
    return (
        <>

            <form onSubmit={submitHandler}>
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