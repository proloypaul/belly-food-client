import React, { useEffect, useState } from 'react';
import './Carts.css';
const Carts = () => {
    const [cartsData, setCartsData] = useState([])

    useEffect(() => {
        const url = `http://localhost:3600/carts`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCartsData(data);
            })
    }, [])
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
                    <p>From <span className='cartTitleOne'>Tejgong Restaurant GPR</span> </p>
                    <p className='cartTitleTwo'>Arriving in <span className='cartTitleOne'>20-30 min</span></p>
                    <p className='cartTitleThree'>Your location<span className='cartTitleOne'>....</span></p>
                    <div>
                        {cartsData.map(cart => <div key={cart._id} className='allCartsData'>
                            <img src={cart.image} alt="Empty!" width="100px" height="100" />
                            <div className='cartPrices'>
                                <p>{cart.foodTitle}</p>
                                <p>${cart.price}</p>
                                <p>Delivery free: ${cart.delivery_free}</p>
                            </div>
                            <div className='cartBtns'>
                                <button>+</button>
                                <span>{cart.foodNum}</span>
                                <button>-</button>
                            </div>
                        </div>)}
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