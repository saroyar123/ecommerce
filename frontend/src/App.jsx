import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Register from "./component/Register"
import User from './component/User'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/user' element={<User/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
