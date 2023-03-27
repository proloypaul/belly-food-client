import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {BsCartDash} from 'react-icons/bs';
import {AiOutlineRight} from 'react-icons/ai';
import './FoodDetains.css';
const FoodDetails = () => {
    // const id = useParams();
    // console.log("food id", id);
    const {id} = useParams();
    const [foodDetailsData, setFoodDetailsData] = useState({});
    // const [price, setPrice] = useState();
    let totalPrice = 0;
    let increment = 0;
    // console.log("price of food", price);
    const handleIncrementBtn = (event) => {
        event.preventDefault();
        let initialPrice = foodDetailsData.price;
        totalPrice = initialPrice + totalPrice;
        increment = increment + 1;
        // setPrice(totalPrice);
        // console.log(initialPrice);
        console.log("increment", increment);    
    }
    
    
    const handleDecrementBtn = () => {
        console.log("Decrement")
    }
    useEffect(() => {
        const url = `http://localhost:3600/foods/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setFoodDetailsData(data)
            })
    }, [id])

    return (
        <div className='foodDetailsContainer'>
            <div className='foodDetail'>
                <p className='detailName'>{foodDetailsData.name}</p>
                <p className='detailDescription'>{foodDetailsData.description}</p>
                <div className='quantite'>
                    <h3 className='detailPrice'>$ {foodDetailsData.price}</h3>
                    <div className='quantiteBtn'>
                        <button className='quantiteMaxBtn' onClick={handleIncrementBtn}>+</button>
                        <h4 className='quantiteNumber'>1</h4>
                        <button className='quantiteMinBtn' onClick={handleDecrementBtn}>-</button>
                    </div>
                </div>
                <button className='commonButton'><BsCartDash/> Add</button>
                {/* all related img */}
                <div className='relatedImg'>
                    <div>
                        <img src={foodDetailsData.imgTwo} alt="Empty!"  width="100px" height="100px"/>
                        <img src={foodDetailsData.imgThree} alt="Empty!" width="100px" height="100px"/>
                    </div>
                    <p className='rightIcon'><AiOutlineRight/></p>
                </div>
            </div>
            <div className='detailImg'>
                <img src={foodDetailsData.imgOne} alt="Empty!" width="400px" height="400px"/>
            </div>
        </div>
    );
};

export default FoodDetails;