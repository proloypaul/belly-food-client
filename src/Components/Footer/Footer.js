import React from 'react';
import './Footer.css';
import footerLogo from '../../Images/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerTitle'>
                <p>LET'S CONNECT WITH OUS</p>
                <div>
                    <input type='email' placeholder='Enter Your abc@gmail.com'/>
                    <button>SUBSCRIBES NOW</button>
                </div>
            </div>
            <div className='footer1Part'>
                <div>
                    <img src={footerLogo} alt="Empty!" width="150px" heigh="60px" />
                </div>
                <div>
                    <Link to="/">About Online food</Link>
                    <Link to="/">Read out blog</Link>                
                    <Link to="/">Sign up to deliver</Link>                
                    <Link to="/">Add your restaurant</Link>                
                </div>
                <div>
                    <Link to="/">Get help</Link>
                    <Link to="/">Read FAQs</Link>
                    <Link to="/">View all cities</Link>
                    <Link to="/">Restaurants near me</Link>
                </div>
            </div>
            <div className='footer2Part'>
                <Link to="/">Copyright&copy;2022 Online belly food</Link>
                <div className="part2Option">
                    <Link to="/">Privacy Policy.</Link>
                    <Link to="/">Terms of Use</Link>
                    <Link to="/">Pricing</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;