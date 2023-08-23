import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import {BsCartDash} from 'react-icons/bs'; 
import navLogo from "../../Images/logo.png";
import Usefirebase from '../../Hooks/Usefirebase';
import fackProfileImg from "../../Images/fackProfile.webp";
const Header = () => {
    const {user, signOutProcess} = Usefirebase()
    
    console.log(user)
    console.log(user?.photoURL)
    return (
        <div className='headerContainer'>
            <nav className='navbar'>
                <Link to="/" className='navbarLogo'>
                    <img src={navLogo} alt='Empty!'/>
                </Link>
                <div className='navbarOption'>
                    <ul>
                        <li><Link to="/carts"><BsCartDash/></Link></li>
                        {user?.email?<li><Link to="/signIn" className='commonButtonTwo' onClick={signOutProcess}>SignOut</Link></li>:
                        <li><Link to="/signUp">SingUp</Link></li>}
                        {user?.email? "": <li><Link to="/signIn" className='commonButtonTwo'>SignIn</Link></li>}
                        {user?.email?user?.photoURL?<li><img className='userNavbarImg' src={user?.photoURL} alt="Empty!" width="50px" height="50px"/></li>:<li><img className='userNavbarImg' src={fackProfileImg} alt="Empty!" width="50px" height="50px"/></li>: ""}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;