import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Foods.css';

const Foods = () => {
    return (
        <div className='foodsContainer'>
            <nav className='foodsnavbar'>
                <NavLink to="/breakfast" activeClassName="active">Breakfast</NavLink>
                <NavLink to="/lunch" activeClassName="active">Lunch</NavLink>
                <NavLink to="/dinner" activeClassName="active">Dinner</NavLink>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Foods;