import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction, deleteFromCartAction } from '../../action/cartAction';
import { getUserAction } from '../../action/userAction';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './CartProduct.css'; // Import the CSS file

const CartProduct = ({ id, quantity, name, description, avatar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.user);

  if (data.success === false) {
    navigate('/');
  }

  const deleteFromCartHandler = async (e) => {
    e.preventDefault();
    await dispatch(deleteFromCartAction(id));
    dispatch(getUserAction());
  };

  const addToCartHandler = async (e) => {
    e.preventDefault();
    await dispatch(addToCartAction(id));
    dispatch(getUserAction());
  };

  return (
    <div className="cart-product"> {/* Add class name */}
      <h1 className="product-name">{name}</h1> {/* Add class name */}
      <h3 className="product-description">{description}</h3> {/* Add class name */}
      <div className="quantity-controls"> {/* Add class name */}
        <button className="quantity-button" onClick={deleteFromCartHandler}>-</button> {/* Add class name */}
        <h3 className="product-quantity">{quantity}</h3> {/* Add class name */}
        <button className="quantity-button" onClick={addToCartHandler}>+</button> {/* Add class name */}
      </div>
    </div>
  );
};

export default CartProduct;
