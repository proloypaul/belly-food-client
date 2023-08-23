import React from 'react';
import Advertise from '../Advertise/Advertise';
import Breakfast from '../Foods/Breakfast/Breakfast';
import Foods from '../Foods/Foods';
import Banner from '../Banner/Banner';
// import Usefirebase from '../../Hooks/Usefirebase';


const Home = () => {
    // const {user} = Usefirebase();
    
    // console.log(user);
    // console.log(user?.photoURL);
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <Breakfast></Breakfast>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;