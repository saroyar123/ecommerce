import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Product from '../Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductAction } from '../../action/productAction'
import Loading from '../Loading/Loading'
import { getUserAction } from '../../action/userAction'

const Home =() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductAction());
    dispatch(getUserAction())
  }, [getAllProductAction, dispatch])

  const { loading, data } = useSelector((state) => state.product);
  console.log(data)
  return (
    <>
      <div>
        {loading ? <Loading /> : data ? data.products.map((product) => {
        return  <Product
         key={product._id}
         id={product._id}
         name={product.name}
         description={product.description}
         />
        }) 
        : <h1>data not found</h1>

        }
      </div>
    </>

  )
}

export default Home