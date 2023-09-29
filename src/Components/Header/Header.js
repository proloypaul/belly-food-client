import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import {BsCartDash} from 'react-icons/bs'; 
import navLogo from "../../Images/logo.png";
import Usefirebase from '../../Hooks/Usefirebase';
import fackProfileImg from "../../Images/fackProfile.webp";
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import {BiSearchAlt2} from 'react-icons/bi'

const Header = () => {
    const {user, signOutProcess} = Usefirebase()
    return (
        <div className='headerContainer'>
            <nav className='navbar'>
                <Link to="/" className='navbarLogo'>
                    <img src={navLogo} alt='Empty!'/>
                </Link>
                <div>
                    <p className='text-2xl p-2 border-0 rounded-full text-white cursor-pointer' style={{background: "crimson"}}><BiSearchAlt2/></p>
                </div>
                <div className='navbarOption'>
                    <ul>
                        <li><Link to="/carts" className='flex items-center'><BsCartDash/> Carts</Link></li>
                        {/* <li><Link to="/carts">Carts</Link></li> */}
                        {user?.email?<li><Link to="/signIn" className='commonButtonTwo' onClick={signOutProcess}>SignOut</Link></li>:
                        <li><Link to="/signUp">SingUp</Link></li>}
                        {user?.email? "": <li><Link to="/signIn" className='commonButtonTwo'>SignIn</Link></li>}
                        {user?.email?user?.photoURL?<li><ProfileMenu/></li>:<li><img className='userNavbarImg' src={fackProfileImg} alt="Empty!" width="50px" height="50px"/></li>: ""}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;