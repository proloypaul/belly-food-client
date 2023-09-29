import React from 'react';
import latestFoodImg from '../../Images/latestFoodImg.png'
import { Link } from 'react-router-dom';
import { ImArrowUpRight2 } from 'react-icons/im';

const LatestFood = () => {
    return (
        <div className='py-10'>
            <div className='categoriestitle'>
                <p>VIEW ALL LATEST</p>
            </div>
            <div className='flex items-center justify-around font-serif font-medium py-10'>
                <div className='w-1/5'>
                    <p>The perfect complement to any meal and dessert</p>
                    <div className='flex items-center justify-between my-10 pb-2 border-b-2 border-black'>
                        <p>Breakfast</p>
                        <Link to='/allFood'><ImArrowUpRight2/></Link>
                    </div>
                    <p>Our dips and sauces, including smoky baba ganoush</p>
                    <div className='flex items-center justify-between my-10 pb-2 border-b-2 border-black'>
                        <p>Bargar</p>
                        <Link to='/allFood'><ImArrowUpRight2/></Link>
                    </div>
                </div>
                <div>
                    <img src={latestFoodImg} alt='Empty!' width='400px' height='300px'/>
                </div>
                <div className='w-1/5'>
                    <p>We also offer a wide range of kebab plates, including lamb</p>
                    <div className='flex items-center justify-between my-10 pb-2 border-b-2 border-black'>
                        <p>Chiken</p>
                        <Link to='/allFood'><ImArrowUpRight2/></Link>
                    </div>
                    <p>At Ottawa Kabab, we strive to create a warm and welcoming</p>
                    <div className='flex items-center justify-between my-10 pb-2 border-b-2 border-black'>
                        <p>Beef</p>
                        <Link to='/allFood'><ImArrowUpRight2/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestFood;