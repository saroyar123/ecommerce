import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<>
<div className='div_footer'>
      <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at quam in tellus euismod semper.</p>
                </div>

                <div class="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shipping Information</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter for updates and special offers.</p>
                    {/* <form action="#" method="post" class="newsletter-form">
                        <input type="email" name="email" placeholder="Enter your email">
                        <button type="submit">Subscribe</button>
                    </form> */}
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2023 Your E-commerce Store. All rights reserved.</p>
            </div>
        </div>
    </footer>
      </div>
</>
  )
}

export default Footer