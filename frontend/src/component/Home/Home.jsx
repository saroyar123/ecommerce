import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Product from '../Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductAction } from '../../action/productAction'
import Loading from '../Loading/Loading'
import { getUserAction } from '../../action/userAction'

const Home =() => {

  const { loading, data } = useSelector((state) => state.product);
  return (
    <>
      <div>
        {loading ? <Loading /> : data ? data.products.map((product) => {
        return  <Product
         key={product._id}
         id={product._id}
         name={product.name}
         description={product.description}
         avatar={product.avatar}
         />
        }) 
        : <h1>data not found</h1>

        }
      </div>
    </>

  )
}

export default Home