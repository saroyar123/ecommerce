import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../action/userAction';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import "./Register.css"

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');
    const [landmark, setLandmark] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
            }
        };
    };

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerAction(name, email, password, city, pin, landmark, avatar));
        navigate('/');
    };

    return (
        <>
            <div className="Register_container">
                <form onSubmit={submitHandler} className="form">
                    <Avatar
                        src={avatar}
                        alt="User"
                        sx={{ height: '10vmax', width: '10vmax' }}
                    />
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder="PIN" value={pin} onChange={(e) => setPin(e.target.value)} />
                    <input type="text" placeholder="Landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
};

export default Register;
