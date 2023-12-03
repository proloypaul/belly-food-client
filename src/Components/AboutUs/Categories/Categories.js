import React from 'react';
import {ImArrowUpRight2} from 'react-icons/im'
import './Categories.css';
import categoriesPicOne from '../../../Images/categoriesPicOne.png';
import categoriesPicTwo from '../../../Images/categoriesPicTwo.png';
import categoriesPicFour from '../../../Images/overViewPicFour.png';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='categoriesContainer'>
            <div className='categoriestitle'>
                <p>OUR CATEGORIES</p>
                <span>Al griled to perfection <br/> over charcoal our dips<br/> and sauces</span>
            </div>
            <div className='categoriesContent'>
                <div>
                    <img src={categoriesPicOne} alt='Empty!' width='300px' height='300px'/>
                </div>
                <div style={{marginLeft: '100px'}}>
                    <div className='categoriesFoodName'>
                        <p>Frittatas, quiches and tarts</p>
                        <Link to='/allFood'><ImArrowUpRight2/></Link>
                    </div>
                    <div className='categoriesFoodName'>
                        <p>Noodles with veggies and herbs</p>
                        <Link to='/allFood'><ImArrowUpRight2/></Link>
                    </div>
                    <div className='categoriesFoodName'>
                        <p>Salads and better yet, salad jars</p>
                        <Link to='/allFood'><ImArrowUpRight2/></Link>
                    </div>
                    <div className='categoriesFoodName'>
                        <p>Rice paper rolls</p>
                        <Link to='/allFood'><ImArrowUpRight2/></Link>
                    </div>
                    <div className='categoriesFoodName'>
                        <p>Easy Wraps and Sandwiches</p>
                        <Link to='/allFood'><ImArrowUpRight2/></Link>
                    </div>
                </div>
                <div>
                    <img src={categoriesPicTwo} alt='Empty!' width='300px' height='300px'/>
                </div>
            </div>

            <div className='flex items-center justify-around py-10'>
                <div className='w-64 font-serif font-bold'>
                    <p>We understand that every event is unique, and we work closely with you to customize out catering menu to suit your specific needs</p>
                </div>
                <div>
                    <img src={categoriesPicFour} alt='Empty!' width='400px' height='300px'/>
                </div>
                <div className='p-10 text-white bg-black rounded-full'>
                    <Link to="/allFood">Explore <br/> More</Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;