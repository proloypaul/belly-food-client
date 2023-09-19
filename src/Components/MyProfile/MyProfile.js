import React from 'react';
import DashboardNav from './DashboardNav';

const MyProfile = () => {
    return (
        <>
            <div className=''>
                <div>
                    <DashboardNav/>
                </div>
                <div className=''>
                    <h1>My Profile content</h1>
                </div>
            </div>
        </>
    );
};

export default MyProfile;