import React from 'react';
import './Carts.css';
const Carts = () => {
    return (
        <div className='cartsContainer'>
            <div className='editDelivery'>
                <div>
                    <h1 className='editDeliveryTitle'><p className='title'>Edit Delibery Details</p></h1>
                    {/* <span className='editbottom'></span> */}
                    <input type="text" placeholder="Delivery to ..."/>
                    <input type="text" placeholder='Your location'/>
                    <input type="text" placeholder='Flat, suite or floor'/>
                    <input type="text" placeholder='Bussiness Name'/>
                    <input type="text" placeholder='Add deliver Instructor'/>
                    <button type='submit'>Save & continue</button>
                </div>
            </div>
            <div className='allCarts'>
                <div className='carts'>
                    <p className='cartTitleOne'>From our location..</p>
                    <p className='cartTitleTwo'>Arriving in ...min</p>
                    <p className='cartTitleThree'>Your location</p>
                    <div className='cart'>
                        <p>Selected cart display here</p>
                    </div>
                    <div className='cartAmount'>
                        <div className='cartAmountTitle'>
                            <p>Subtotal: </p>
                            <p>Delivery free: </p>
                            <p>Tax: </p>
                            <p>Total: </p>
                        </div>
                        <div>
                            <p>$...</p>
                            <p>$...</p>
                            <p>$...</p>
                            <p>$...</p>
                        </div>
                    </div>
                    <button className='checkoutFoodBtn'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Carts;