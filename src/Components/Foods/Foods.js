import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Foods.css';

const Foods = () => {
    return (
        <div className='foodsContainer'>
            <nav className='foodsnavbar'>
                <NavLink to="/breakfast">Breakfast</NavLink>
                <NavLink to="/lunch">Lunch</NavLink>
                <NavLink to="/dinner">Dinner</NavLink>
            </nav>
            <Outlet/>
            <h1>Foods section</h1>
        </div>
    );
};

export default Foods;