import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className='headerContainer'>
            <nav className='navbar'>
                <div className='navbarLogo'>
                    <h1>logo place</h1>
                </div>
                <div className='navbarOption'>
                    <ul>
                        <li><Link to="/cart">cart</Link></li>
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