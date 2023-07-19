import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProductAction } from '../../action/productAction';
import axios from 'axios';

const Product = ({name,description}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default Product;
