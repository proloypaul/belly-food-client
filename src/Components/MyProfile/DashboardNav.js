import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import ManageOrder from './ManageOrder/ManageOrder';


const DashboardNav = () => {
    const [displayOverView, setDisplayOverView] = useState(false)
    return (
        <>
            <div className='py-10 px-2'>
                <div>
                    <nav className='grid grid-cols-4'>
                        <ul onClick={() => setDisplayOverView(true)}>
                            <li><Link to="/myProfile/editProfile">Edit Profile</Link></li>
                            <li><Link to="/myProfile/myOrder">My Order</Link></li>
                            <li><Link to="/myProfile/manageOrder">Manage Order</Link></li>
                            {/* <li><Link to="/myProfile/makeAdmin">Make Admin</Link></li> */}
                        </ul>
                        <div className='col-span-3'>
                            <Outlet/>
                            {displayOverView?"": <h1>Here we can Implemet Overview of Profile</h1>}
                        </div>
                        
                    </nav>
                    {/* <ManageOrder/> */}
                </div>
            </div>
        </>
    );
};

export default DashboardNav;