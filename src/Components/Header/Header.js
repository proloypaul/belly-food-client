import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import {BsCartDash} from 'react-icons/bs'; 
import navLogo from "../../Images/logo.png";
const Header = () => {
    return (
        <div className='headerContainer'>
            <nav className='navbar'>
                <div className='navbarLogo'>
                    <img src={navLogo} alt='Empty!'/>
                </div>
                <div className='navbarOption'>
                    <ul>
                        <li><Link to="/carts"><BsCartDash/></Link></li>
                        <li><Link to="/signIn" className='commonButton'>SignIn</Link></li>
                        <li><Link to="/signUp">SingUp</Link></li>
                    </ul>
                </div>
            </nav>
            {/* banner section              */}
            <div className='bannerContainer'>
                <div className='bannerTitle'>
                    <h1>Best food waiting for your belly</h1>
                    <div className='bannerSearch'>
                        <input placeholder='Search food items...'/>
                        <button className='commonButton'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;