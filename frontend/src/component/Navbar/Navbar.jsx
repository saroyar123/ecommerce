import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { Login } from '@mui/icons-material'

const Navbar = () => {
  const [tab, setTab] = useState(window.location.pathname)
  const { data } = useSelector((state) => state.user)
  return (
    <>
      <div className='Navbar'>
        <Link to="/" className='link'>
          Home
        </Link>
        {
          data.success ? (
            <>
              <Link to="/cart" className='link'>
                Cart
              </Link>
              <Link to="/order" className='link'>
                Order
              </Link>
              <Link to="/account" className='link'>
                Account
              </Link>
              <Link to="/createProduct" className='link'>
                Create Product
              </Link>
            </>)
            : <Link to="/login" className='link'>Login</Link>
        }
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Navbar