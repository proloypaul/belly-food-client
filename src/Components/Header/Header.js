import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import {BsCartDash} from 'react-icons/bs'; 
import navLogo from "../../Images/logo.png";
import Usefirebase from '../../Hooks/Usefirebase';
import fackProfileImg from "../../Images/fackProfile.webp";
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import {BiSearchAlt2} from 'react-icons/bi'
import { useGetSearchFoodQuery } from '../../redux/features/api/apiSlice';
import SearchResultPopup from './SearchResultPopup.js/SearchResultPopup';

const Header = () => {
    const {user, signOutProcess} = Usefirebase();
    const [searchText, setSearchText] = useState("");
    // handle dialog 
    const [size, setSize] = React.useState(null);
    const handleOpen = (value) => setSize(value);

    // collect searched food 
    const {data} = useGetSearchFoodQuery(searchText)
    
    const HandleSearchFood = () => {
        // return {data, isLoading}
        handleOpen("lg")

    }

    return (
        <div className='headerContainer'>
            <nav className='navbar'>
                <Link to="/" className='navbarLogo'>
                    <img src={navLogo} alt='Empty!'/>
                </Link>
                <div className='flex'>
                    <input type='text' placeholder='Search Food' className='border-2 border-sky-500 px-2 py-0 text-pink-500 font-medium rounded-lg hover:outline-offset-2 hover:outline-pink-500' onBlur={(e) => setSearchText(e.target.value)}/>
                    <p className='text-2xl p-2 border-0 rounded-full text-white cursor-pointer bg-pink-500' style={{ marginLeft: "-20px"}} onClick={() => HandleSearchFood()}><BiSearchAlt2/></p>
                </div>
                <div className='navbarOption'>
                    <ul>
                        <li><Link to="/carts" className='flex items-center'><BsCartDash/> Carts</Link></li>
                        {user?.email?<li><Link to="/signIn" className='commonButtonTwo' onClick={signOutProcess}>SignOut</Link></li>:
                        <li><Link to="/signUp">SingUp</Link></li>}
                        {user?.email? "": <li><Link to="/signIn" className='commonButtonTwo'>SignIn</Link></li>}
                        {user?.email?user?.photoURL?<li><ProfileMenu/></li>:<li><img className='userNavbarImg' src={fackProfileImg} alt="Empty!" width="50px" height="50px"/></li>: ""}
                    </ul>
                </div>
            </nav>

            <SearchResultPopup size={size} handleOpen={handleOpen} searchData={data}/>
        </div>
    );
};

export default Header;