import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaCcApplePay, FaCcVisa, FaCcMastercard   } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>ABOUT THE SHOP</h2>
            <p>ForeverSummer is known in the Kahosiung area as a one-of-a-kind & elegant drinking shop, while still embracing the organic and natural forms of our selected flowers.</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <h2>WHERE TO FIND US</h2>
            <p>3F No.12, Chung-Shan Road Kaohsiung, Taiwan <br></br>
Tuesday-Sunday: 10:00 - 18:30 <br></br>
Monday: closed <br></br>
foreversummer@gmail.com +886 7 1234567
</p>
          </div>
          <div class='footer-link-items'>
            <h2>EXTRA INFORMATION</h2>
            <p>Services <br></br>
                Drinking Share  <br></br>
                FAQ  <br></br>
                Contact  <br></br>
</p>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <FaCcApplePay /> &ensp;
      <FaCcVisa /> &ensp; <FaCcMastercard />
            </Link>
          </div>
          
          <small class='website-rights'>Summer Forever ©2023</small>
        </div>
      </section>
      
      
    </div>
    
  );
}

export default Footer;
