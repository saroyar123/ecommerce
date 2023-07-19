import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [tab,setTab]=useState(window.location.pathname)
  return (
    <div className='Navbar'>
<Link to="/" className='link'>
Home
</Link>
<Link to="/cart" className='link'>
Cart
</Link>
<Link to="/order" className='link'>
Order
</Link>
    </div>
  )
}

export default Navbar