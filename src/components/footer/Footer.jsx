import React from 'react'
import './Footer.css'

import { FaFacebook,FaXTwitter,FaInstagram ,  FaLinkedinIn} from "react-icons/fa6"; 

export const Footer = () => {
  return (
    <div>
        <footer class="footer">
          <div class="footer-container">
            <div class="footer-section about">
              <h3>About Us</h3>
              <p>We are committed to providing the best services and tools to help you manage your finances efficiently and effectively. Learn more about our mission and values.</p>
            </div>

            <div class="footer-section contact">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:signfforce@gmail.com">signfforce@gmail.com</a></p>
              <p>Phone: <a href="tel:+254 101359459">+254 101359459</a></p>
              <p>Address: 123 Ruaraka, Nairobi, Kenya</p>
            </div>
            <div class="footer-section social">
              <h3>Follow Us</h3>
              <div class="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaXTwitter/></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

         <div class="footer-bottom">
            <p>&copy; 2024 CCL <i>SIGN DEVS</i> . All rights reserved.</p>
          </div>
      </footer>

    </div>
  )
}
