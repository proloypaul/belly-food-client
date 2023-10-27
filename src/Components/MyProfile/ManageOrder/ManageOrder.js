import React from 'react';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { RiDeleteBinFill } from 'react-icons/ri';
import { LoadRegisteredUserOrder, handleDltOrder } from '../../../CommonStyle/CommonCode';
 

const ManageOrder = () => {
    const {orderInfo, setOrderInfo} = LoadRegisteredUserOrder()
    const TABLE_HEAD = ["Ordered", "Location", "Date", "Delivery To", ""];
       
      
    return (
        <div className='pl-5'>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                        Orders list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                        See information about all Orders
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm" className="text-pink-500">
                        <Link to="/allFood">view Food</Link>
                        </Button>
                        <Button className="flex items-center gap-3 text-white bg-pink-500" size="sm"> 
                        <Link to="/allFood">Add Food</Link>
                        </Button>
                    </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                            key={head}
                            className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
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
                        {orderInfo?.map((order, index) => {
                            const isLast = index === orderInfo.length - 1;
                            const classes = isLast
                              ? "p-4"
                              : "p-4 border-b border-blue-gray-50";
                            return (
                                <tr key={order._id}>
                                    <td className={classes}>
                                        {order.FoodItem.map(food => (
                                            <div className="flex items-center gap-3">
                                                <Avatar src={food.image} alt={"Empty!"} size="sm" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {food.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        Order: {food.foodNum}
                                                    </Typography>
                                                </div>
                                            </div>
                                        ))}
                                    </td>
                                    <td className={classes}>
                                    <div className="flex flex-col">
                                        <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                        >
                                        {order.location}
                                        </Typography>
                                        {/* <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal opacity-70"
                                        >
                                        {org}
                                        </Typography> */}
                                    </div>
                                    </td>
                                    <td className={classes}>
                                    <div className="w-max">
                                        <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                        >
                                        {order.date}
                                        </Typography>
                                    </div>
                                    </td>
                                    <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {order.DeliveryTo}
                                    </Typography>
                                    </td>
                                    <td className={classes}>
                                        <button   className="cartDltBtn" onClick={() => handleDltOrder(order._id, orderInfo, setOrderInfo)}>
                                            <RiDeleteBinFill/>
                                        </button>
                                    </td>
                                </tr>
                            )})}
                    </tbody>
                    </table>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Page 1 of 10
                        </Typography>
                        <div className="flex gap-2">
                        <Button variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm">
                            Next
                        </Button>
                        </div>
                    </CardFooter>
            </Card>
            <div>
            <p className='pt-10'>If You have any Order. Don't Forgot To <button className="commonButtonTwo" onClick={() => window.location.reload()}>Refresh</button> The Page</p>
            </div>
        </div>
    );
};

export default ManageOrder;