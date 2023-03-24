import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {BsCartDash} from 'react-icons/bs';
import './FoodDetains.css';
const FoodDetails = () => {
    // const id = useParams();
    // console.log("food id", id);
    const {id} = useParams();
    const [foodDetailsData, setFoodDetailsData] = useState({});

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
                        <button className='quantiteMaxBtn'>+</button>
                        <h4 className='quantiteNumber'>1</h4>
                        <button className='quantiteMinBtn'>-</button>
                    </div>
                </div>
                <button className='commonButton'><BsCartDash/> Add</button>
                {/* all related img */}
                <div className='relatedImg'>
                    <img src={foodDetailsData.imgTwo} alt="Empty!"  width="100px" height="100px"/>
                    <img src={foodDetailsData.imgThree} alt="Empty!" width="100px" height="100px"/>
                    <img src={foodDetailsData.imgFour} alt="Empty!" width="100px" height="100px"/>
                </div>
            </div>
            <div className='detailImg'>
                <img src={foodDetailsData.imgOne} width="400px" height="400px"/>
            </div>
        </div>
    );
};

export default FoodDetails;