import React from 'react';
import Advertise from '../Advertise/Advertise';
import Breakfast from '../Foods/Breakfast/Breakfast';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
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