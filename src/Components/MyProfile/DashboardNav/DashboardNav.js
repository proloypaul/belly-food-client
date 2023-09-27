import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ProfileOverView from '../ProfileOverView/ProfileOverView';
import { Avatar, Typography } from '@material-tailwind/react';
import Usefirebase from '../../../Hooks/Usefirebase';
import './DashboardNav.css'
// import ManageOrder from './ManageOrder/ManageOrder';


const DashboardNav = () => {
    const [displayOverView, setDisplayOverView] = useState(false)
    const {user} =  Usefirebase()

    return (
        <>
            <div className='py-20 px-10'>
                <div>
                    <nav className='grid grid-cols-4 dashboardNav'>
                        <div className='navOptions'>
                            <Link to="/myProfile/profileOverView" className="flex items-center gap-4 pb-5">
                                <Avatar src={user?.photoURL} alt="Empty!" withBorder={true} className="p-0.5"/>
                                <div>
                                    <Typography variant="h6" style={{color: "white"}}>{user.displayName}</Typography>
                                </div>
                            </Link>
                            <ul onClick={() => setDisplayOverView(true)}>
                                <li><Link to="/myProfile/profileOverView">Profile OverView</Link></li>
                                <li><Link to="/myProfile/myOrder">My Order</Link></li>
                                <li><Link to="/myProfile/manageOrder">Manage Order</Link></li>
                                <li><Link to="/myProfile/editProfile">Edit Profile</Link></li>
                                {/* <li><Link to="/myProfile/makeAdmin">Make Admin</Link></li> */}
                            </ul>
                        </div>
                        <div className='col-span-3'>
                            <Outlet/>
                            {displayOverView?"": <ProfileOverView/>}
                        </div>
                        
                    </nav>
                </div>
            </div>
        </>
    );
};

export default DashboardNav;