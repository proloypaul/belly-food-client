import React from 'react';
import Advertise from '../Advertise/Advertise';
import Breakfast from '../Foods/Breakfast/Breakfast';
import Foods from '../Foods/Foods';
import Header from '../Header/Header';
import Usefirebase from '../../Hooks/Usefirebase';


const Home = () => {
    const {user} = Usefirebase();
    const toDay = new Date();
    const time = toDay.getMinutes();
    console.log(toDay);
    console.log(time);
    // console.log(user);
    // console.log(user?.photoURL);
    return (
        <div>
            <Header></Header>
            <Foods></Foods>
            <Breakfast></Breakfast>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;