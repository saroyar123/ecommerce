import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import Register from "./component/Register/Register"
import User from './component/Account/Account'
import Cart from './component/Cart/Cart'
import Order from './component/Order/Order'
import Product from './component/Product/Product'
import Navbar from './component/Navbar/Navbar'
import Login from './component/Login/Login'
import ProductDetails from './component/ProductDetails/ProductDetails'
import Account from './component/Account/Account'
import { useDispatch } from 'react-redux'
import { getAllProductAction } from './action/productAction'
import { getUserAction } from './action/userAction'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductAction());
    dispatch(getUserAction())
  }, [getAllProductAction, dispatch,getUserAction])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/user' element={<User />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productDetails' element={<ProductDetails/>}/>
          <Route path='/account' element={<Account/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
