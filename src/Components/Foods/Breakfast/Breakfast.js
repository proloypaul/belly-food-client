import React from 'react';
import CommonCode from '../../../CommonStyle/CommonCode';
import './Breakfast.css';
const Breakfast = () => {
    const {foodsData} = CommonCode();

    console.log("foods data", foodsData);
    return (
        <div className='breakfastContainer'>
            <div className="breakfastFoods">
                {foodsData.slice(0, 6).map(food => <div key={food._id} className="allFoods">
                    <div className='foods'>
                        <img src={food.imgOne} alt="Empty!" width="150px" height="150px"/>
                        <p className='foodName'>{food.name}</p>
                        <p className='foodMsg'>{food.msg}</p>
                        <h4 className='foodPrice'>${food.price}</h4>
                    </div>
                </div>)}
            </div>
            <div className='checkoutFood'>
                <button className='checkoutFoodBtn'>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Breakfast;