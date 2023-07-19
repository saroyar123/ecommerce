import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import Register from "./component/Register/Register"
import User from './component/User/User'
import Cart from './component/Cart/Cart'
import Order from './component/Order/Order'
import Product from './component/Product/Product'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/user' element={<User/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/product' element={<Product/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
