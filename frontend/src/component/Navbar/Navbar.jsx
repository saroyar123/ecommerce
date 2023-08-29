import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { Login } from '@mui/icons-material';
import Footer from '../Footer/Footer';

const Navbar = () => {
  const [tab, setTab] = useState(window.location.pathname);
  const { data } = useSelector((state) => state.user);
  const [searchTerm,setSearchTerm]=useState('')

  return (
    <>
      <div className='wrapper'>
        <div className='navbar-container'>
          <div className='Navbar'>
            <div className='search-form'>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">Search</button>
            </div>
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

                </>
              ) : (
                <Link to="/login" className='link'>Login</Link>
              )
            }
          </div>
        </div>
        <div className='content'>
          <Outlet />
        </div>
        <Footer />
      </div>

    </>
  );
}

export default Navbar;