import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CreateProduct.css'
import { useDispatch } from 'react-redux';
import { createProductAction, getAllProductAction } from '../../action/productAction';

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [totalquentity, setTotalquentity] = useState();
  const [brand,setBrand]=useState("")
  const [catagory,setCatagory]=useState("")
  const [avatar, setAvatar] = useState("")

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

  const submitHandller=async(e)=>{
    e.preventDefault();
   await dispatch(createProductAction(name,description,price,totalquentity,brand,catagory,avatar));
   dispatch(getAllProductAction())

  }

  return (
    <div>
      <form onSubmit={submitHandller} className='Form'>
        <Avatar
          src={avatar}
          alt="User"
          sx={{ height: "10vmax", width: "10vmax" }}
        />

        <input className='inputClass' type="file" accept="image/*" onChange={handleImageChange} />

        <input className='inputClass' type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='inputClass' type='text' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <input className='inputClass' type='number' placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input className='inputClass' type='number' placeholder='totalquentity' value={totalquentity} onChange={(e) => setTotalquentity(e.target.value)} />
        <input className='inputClass' type='text' placeholder='brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
        <input className='inputClass' type='text' placeholder='catagory' value={catagory} onChange={(e) => setCatagory(e.target.value)} />
        <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default CreateProduct