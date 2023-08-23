import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bannerContainer'>
            <div className='bannerTitle'>
                <h1>Best food waiting for your belly</h1>
                <div className='bannerSearch'>
                    <input placeholder='Search food items...'/>
                    <button className='commonButtonTwo'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;