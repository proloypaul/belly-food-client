import React from 'react';
import {CiDeliveryTruck} from 'react-icons/ci'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './Advertise.css';
import { Link } from 'react-router-dom';

const advertiseData = [
    {
        id: 1,
        name:"Home Delivery",
        describe: "Keep your systems in sync with authomated web hook based notifications each time link is paid and how we dream about out future.",
        img: "https://i.ibb.co/mv6qCw1/pexels-norma-mortenson-4392872.jpg",
    },
    {
        id: 2,
        name:"Fast Delivery",
        describe: "Keep your systems in sync with authomated web hook based notifications each time link is paid and how we dream about out future.",
        img: "https://i.ibb.co/6Zfhsnt/Group-1151.png",
    },
    {
        id: 3,
        name:"A Good Auto Responder",
        describe: "Keep your systems in sync with authomated web hook based notifications each time link is paid and how we dream about out future.",
        img: "https://i.ibb.co/T29B8js/pexels-tanya-gorelova-3933217.jpg",
    },
]

// https://ibb.co/FKQ2L4R
// https://ibb.co/DpGKyRn
// https://ibb.co/yRbTsfk
// https://ibb.co/JtDR769
// https://ibb.co/HNnzDs1
const Advertise = () => {
    return (
        <div className='advertiseContainer'>
            <p className='advertiseTitle'>Why you choose us</p>
            <p className='advertiseMsg'>Barton waited twenty always repair in within we do. An delighted offending curiosity my dashwoods at.Boy prosperous increasing surrounded.
            </p>
            <div className='advertiseBoxes'>
                {advertiseData.map(advertise => <div key={advertise.id} className="advertiseBox">
                    <img src={advertise.img} alt="Empty!" width="300px" height="250px"/>
                    <div className='logoAndTitle'>
                        <p className='advertiseLogo'><CiDeliveryTruck/></p>
                        <div>
                            <p className='advertiseName'>{advertise.name}</p>    
                            <p className='advertiseDescription'>{advertise.describe}</p>
                            <Link to="/allFood" className='advertiseSeeMore'>see More <span className='seeMoreIcon'><AiOutlineArrowRight/></span></Link>
                        </div>
                        
                    </div>
                    
                </div>)}                
            </div>
        </div>
    );
};

export default Advertise;