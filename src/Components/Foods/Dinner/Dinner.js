import React from 'react';
import CommonCode from '../../../CommonStyle/CommonCode';

const Dinner = () => {
    const {foodsData} = CommonCode();
    return (
        <div className='breakfastContainer'>
            <div className="breakfastFoods">
                {foodsData.slice(13, 19).map(food => <div key={food._id} className="allFoods">
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

export default Dinner;