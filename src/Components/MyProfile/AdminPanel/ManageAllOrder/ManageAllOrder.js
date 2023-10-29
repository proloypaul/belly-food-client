import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Typography
} from "@material-tailwind/react";
import { RiDeleteBinFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { handleDltOrder } from '../../../../CommonStyle/CommonCode';
 

const ManageAllOrder = () => {
    const [allOrderInfo, setAllOrderInfo] = useState([]);

    useEffect(() => {
        const url = `https://belly-food-server.onrender.com/orderinformation`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setAllOrderInfo(data)
            })
    }, [])

    console.log('allOrderinfo', allOrderInfo)

    return (
        <div className='pl-5 py-10'>
            <div>
                {allOrderInfo.length !== 0? <div className="pb-5">
                {allOrderInfo.map(info => (
                    <div key={info._id} className="pb-4 mb-8">
                        <div className="flex items-center gap-5">
                            {info.FoodItem.map( food => (
                                <div key={food._id}>
                                    <div className="flex items-center pr-5 gap-3 border-b-4 border-pink-500 rounded-lg px-3 py-2 drop-shadow-lg bg-pink-300">
                                        <Avatar src={food.image} alt={"Empty!"} size="sm" />
                                        <div>
                                            <Typography  
                                                variant="small"
                                                color="pink-500"
                                                className="font-medium text-white "
                                            >Order: {food.foodNum}</Typography>
                                            <Typography 
                                                variant="small"
                                                // color="blue-gray"
                                                className="font-normal text-white"
                                            >{info.date}</Typography>   
                                        </div>
                                    </div>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal opacity-70"
                                    >{food.name}</Typography>
                                </div>
                            )
                            )}
                        </div>
                        <div className='flex gap-5 pt-3'>
                            <div>
                                <Typography 
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                                >

                                    {info.name}
                                </Typography>
                                <Typography 
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                                >
                                    {info.email}
                                </Typography>
                            </div>
                            <div>
                                <Typography 
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                                >
                                {info.location}
                                </Typography>
                                <div className="flex items-center gap-3">
                                    <Typography 
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {info.FlatAndFloor}
                                    </Typography>
                                    <Typography 
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold opacity-70"
                                    >
                                        Price: $.{info.totalPriceWithTaxAndDeliver}
                                    </Typography>
                                </div>
                            </div>
                            <div>
                            <button className="cartDltBtn" onClick={() => handleDltOrder(info._id, allOrderInfo, setAllOrderInfo)}>
                                <RiDeleteBinFill/>
                            </button>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}
            </div> : <div className="text-black flex justify-center items-center font-serif">
                    <div>
                        <h1 className='py-5 text-4xl font-bold'>Let's GO To Order Now</h1>
                        <div className='pb-5 text-center'>
                            <Link to="/allFood" className='commonButtonTwo mr-5'>Order Now</Link>
                            <Link to="/allFood">Find Food</Link>
                        </div>
                        <p>If You have any Order. Don't Forgot To <button className="commonButtonTwo" onClick={() => window.location.reload()}>Refresh</button> The Page</p>
                    </div>
                    </div>}
            </div>
        </div>
    );
};

export default ManageAllOrder;