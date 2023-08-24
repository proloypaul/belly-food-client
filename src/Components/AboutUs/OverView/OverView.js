import React from 'react';
import { Link } from 'react-router-dom';
import overViewPicOne from '../../../Images/overviewPicOne.png';
import overViewPicTwo from '../../../Images/overviewPicTwo.png';
import overViewPicThree from '../../../Images/overviewPicThree.png';
import './OverView.css';



const OverView = () => {
    return (
        <div className='overViewContainer'>
            <div className='overViewContent'>
                <div className='overViewPartOne'>
                    <div className='overViewTitle'>
                        <p>EXPERIENCE OF <br/> REAL RECIPIES <br/> <p className='alignImg'>TASTE <img src={overViewPicThree} alt='Empty!' width='70px' height='70px'/></p></p>
                    </div>
                    <div className='overViewFoods'>
                        <img src={overViewPicTwo} alt='Empty!' width='100px' height='100px'/>
                        <p>But our menu doesn't stop at breakfast. We also affer a wide range of kebab plates.</p>
                        <Link to="/allFood">VIEW ALL</Link>
                    </div>
                </div>
                <div className='overViewPartTwo'>
                    <img src={overViewPicOne} alt='Empty!' width='400px' height='400px'/>
                </div>
            </div>
        </div>
    );
};

export default OverView;