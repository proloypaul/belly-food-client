import React from 'react';
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
        </div>
    );
};

export default Home;