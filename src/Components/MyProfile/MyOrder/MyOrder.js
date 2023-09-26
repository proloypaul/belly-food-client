import React, { useEffect, useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import Usefirebase from '../../../Hooks/Usefirebase';
import { Link } from 'react-router-dom';
import { RiDeleteBinFill } from 'react-icons/ri';
import { handleDltOrder } from '../../../CommonStyle/CommonCode';
 

const MyOrder = () => {
    const [orderInfo, setOrderInfo] = useState([]);
    const {user} = Usefirebase()
    const TABLE_HEAD = ["Food Name", "Email", "Date", "Location", "Total Food", "TotalPrice", ""];

    useEffect(() => {
        const url = `https://belly-food-server.onrender.com/orderinformation/${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setOrderInfo(data)
            })
    }, [user?.email])

    // console.log("orderInfo ",orderInfo.length)    
    return (
        <div className='pl-10'>
            <div>
                {orderInfo.length !== 0? <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                                >
                                {head}
                                </Typography>
                            </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {orderInfo.map( info => (
                            <tr key={info._id} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="">
                                {info.FoodItem.map(food => <div>
                                    <p>{food.name}</p>
                                </div>)}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                {info.email}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                {info.date}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                {info.location}
                                </Typography>
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                {info.FlatAndFloor}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium text-center">
                                {info.FoodItem.length}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                {info.totalPriceWithTaxAndDeliver}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <button   className="cartDltBtn" onClick={() => handleDltOrder(info._id, orderInfo, setOrderInfo)}>
                                <RiDeleteBinFill/>
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Card> : <div className="text-white flex justify-center items-center font-serif">
                    <div>
                        <h1 className='py-5 text-4xl font-bold'>Let's GO To Order Now</h1>
                        <div className='pb-5 text-center'>
                            <Link to="/allFood" className='commonButtonTwo mr-5'>Order Now</Link>
                            <Link to="/allFood">Find Food</Link>
                        </div>
                    </div>
                    </div>}
            </div>
        </div>
    );
};

export default MyOrder;