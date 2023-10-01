import React from 'react';
import Advertise from '../Advertise/Advertise';
import Breakfast from '../Foods/Breakfast/Breakfast';
import Foods from '../Foods/Foods';
// import Banner from '../Banner/Banner';
import OverView from '../AboutUs/OverView/OverView';
import Categories from '../AboutUs/Categories/Categories';
import LatestFood from '../LatestFood/LatestFood';
import DisplayUserReview from '../DisplayUserReview/DisplayUserReview';
import MessagePopup from '../MessagePopup/MessagePopup';
import messageSvgIcon from '../../Images/svg/messageIcon.svg'




const Home = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
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
            {/* Message Popup */}
            <div className=' fixed bottom-0 right-0 mb-2 mr-2'>
                <div className='cursor-pointer' onClick={() => handleOpen()}><img src={messageSvgIcon} alt='Empty!' width="50px" height="50px"/></div>
            </div>
            <MessagePopup openMessagPopup={open} handleMessageOpen={handleOpen}/>
        </div>
    );
};

export default Home;