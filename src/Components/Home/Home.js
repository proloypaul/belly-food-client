import React from 'react';
import Advertise from '../Advertise/Advertise';
import Breakfast from '../Foods/Breakfast/Breakfast';
import Foods from '../Foods/Foods';
// import Banner from '../Banner/Banner';
import OverView from '../AboutUs/OverView/OverView';
import Categories from '../AboutUs/Categories/Categories';
import LatestFood from '../LatestFood/LatestFood';
import DisplayUserReview from '../DisplayUserReview/DisplayUserReview';
// import Usefirebase from '../../Hooks/Usefirebase';


const Home = () => {
    // const {user} = Usefirebase();
    
    // console.log(user);
    // console.log(user?.photoURL);
    return (
        <div>
            {/* <Banner></Banner> */}
            <OverView></OverView>
            <Foods></Foods>
            <Breakfast></Breakfast>
            <Categories></Categories>
            <LatestFood></LatestFood>
            <DisplayUserReview></DisplayUserReview>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;