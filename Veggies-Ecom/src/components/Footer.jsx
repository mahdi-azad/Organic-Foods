import React from 'react'
import '../styles/footer.scss'
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__container-info'>
                <div className='footer__container-info-item'>
                    <h5>About Us</h5>
                    < br/> <img className='footer-stock-img' src='/images/footer/footer-stock.png' alt='' loading='lazy'></img>
                    < br/> <p>We are a dedicated online marketplace passionate about connecting individuals to the freshest and finest vegetables and fruits.</p>
                </div>
                <div className='footer__container-info-item'>
                    <h5>Information</h5>
                    <ul>
                        <li>New Products</li>
                        <li>Top Sellers</li>
                        <li>Our Blog</li>
                        <li>About Our Shop</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className='footer__container-info-item'>
                    <h5>Instagram</h5> 
                    <br/> <p>
                        {/* <FaInstagram className='footer__container-info-ig' style={{ fontSize: '2.5em'}}></FaInstagram>&nbsp;&nbsp; */}
                        Follow Us On Instagram!</p>
                </div>
                <div className='footer__container-info-item'>
                    <h5>Contact Us</h5> 
                    <div>
                        <p><span className='footer__container-info-icon'><FaHouseChimney /></span>&nbsp;&nbsp;1063 Freelon Street, San Francisco</p>
                    </div>
                    <div>
                        <p><span className='footer__container-info-icon'><FaPhone /></span>&nbsp;&nbsp;(669) 553 9406</p>
                    </div>  
                    <div>
                        <p><span className='footer__container-info-icon'><MdEmail /></span>&nbsp;&nbsp;support@vtheme.com</p>
                    </div>
                    <div>
                        <p>For Product Information and general inquiries please <span className='footer__container-info-icon'>contact us</span></p>
                    </div>
                </div>
            </div>
            <div className='footer__container-links'>
                <div className='footer__container-links-socials'>
                    
                    <div className=''>
                        <FaFacebookF className='facebook'/>
                    </div>
                    <div>
                        <FaTwitter className='twitter'/>
                    </div>
                    <div>
                        <FaInstagram className='instagram'/>
                    </div>
                    <div>
                        <FaGooglePlusG className='googleplus'/>
                    </div>
                    <div>
                        <FaPinterest className='pinterest'/>
                    </div>
                </div>
                <div className='footer__container-links-payment'>
                    
                    <div>
                        <FaCcPaypal className='paypal'/>
                    </div>
                    <div>
                        <FaCcMastercard className='mastercard'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer__footer'>
            <div className='footer__footer-container'>
                <div>
                    <p>Copyright 2017 Fruit Store - All Rights Reserved.</p>
                </div>
                <div>
                    <p>Privacy Policy | Terms And Conditions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer