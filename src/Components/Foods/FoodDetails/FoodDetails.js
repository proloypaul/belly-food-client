import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {BsCartDash} from 'react-icons/bs';
import {AiOutlineRight} from 'react-icons/ai';
import './FoodDetains.css';
const FoodDetails = () => {
    // const id = useParams();
    // console.log("food id", id);
    const {id} = useParams();
    const [foodDetailsData, setFoodDetailsData] = useState({});
    let [price, setPrice] = useState(0);
    let [foodNumber, setFoodNumber] = useState(0);
    
    // console.log("price of food", price);
    // console.log("foodNumber of food", foodNumber);
    // handle increment food button
    const handleIncrementBtn = () => {
        const initialPrice = foodDetailsData.price;
        if(0<=price && 0<=foodNumber ){
            price = price + initialPrice;
            setPrice(price);
            foodNumber = foodNumber + 1;
            setFoodNumber(foodNumber);
        }
    }
    // handle decrement food button
    const handleDecrementBtn = () => {
        const initialPriceTwo = foodDetailsData.price;
        if(0<price && 0<foodNumber){
            price = price - initialPriceTwo;
            setPrice(price);
            foodNumber = foodNumber - 1;
            setFoodNumber(foodNumber);
        }
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

    // select food for carts
    const handleCarts = () => {
        const cartsData = {
            name: foodDetailsData.name,
            foodTitle: `${foodDetailsData.type} Food`,
            image: foodDetailsData.imgOne,
            price: price,
            describe: foodDetailsData.description,
            foodNum: foodNumber? foodNumber: 1,
            date: new Date().toLocaleDateString(),
            arriveTime: "10-20",
            ourLocation: "Tejgong Restaurant GPR" 
        }
        console.log(cartsData);
        
        const url = `http://localhost:3600/carts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartsData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            }).catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='foodDetailsContainer'>
            <div className='foodDetail'>
                <p className='detailName'>{foodDetailsData.name}</p>
                <p className='detailDescription'>{foodDetailsData.description}</p>
                <div className='quantite'>
                    <h3 className='detailPrice'>$ {price?price:foodDetailsData.price}</h3>
                    <div className='quantiteBtn'>
                        <button className='quantiteMaxBtn' onClick={() => handleIncrementBtn()}><abbr title='Click again'>+</abbr></button>
                        <h4 className='quantiteNumber'>{foodNumber? foodNumber: 1}</h4>
                        <button className='quantiteMinBtn' onClick={handleDecrementBtn}>-</button>
                    </div>
                </div>
                <Link to="/carts"><button className='addToCartBtn' onClick={handleCarts}><BsCartDash/> Add</button></Link>
                {/* all related img */}
                <div className='relatedImg'>
                    <div>
                        <Link to="/allFood"><img src={foodDetailsData.imgTwo} alt="Empty!"  width="100px" height="100px"/></Link>
                        <Link to="/allFood"><img src={foodDetailsData.imgThree} alt="Empty!" width="100px" height="100px"/></Link>
                        <Link to="/allFood"><img src={foodDetailsData.imgFour} alt="Empty!" width="100px" height="100px"/></Link>
                    </div>
                    <Link to="/allFood"><p className='rightIcon'><AiOutlineRight/></p></Link>
                </div>
            </div>
            <div className='detailImg'>
                <img src={foodDetailsData.imgOne} alt="Empty!" width="400px" height="400px"/>
            </div>
        </div>
    );
};

export default FoodDetails;