import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Thank you for choosing hunger for your culinary cravings! We're
            dedicated to bringing you a delightful dining experience with every
            order. Whether it's a quick bite or a sumptuous feast, we're here to
            satisfy your hunger. Stay connected with us for the latest updates,
            promotions, and more mouthwatering menus.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+915899870</li>
            <li>contact@hunger.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {currentYear} © hunger.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
