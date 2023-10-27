import { Avatar, Button, CardHeader, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { LoadRegisteredUserOrder } from '../../../CommonStyle/CommonCode';
 

const MyOrder = () => {
    const {orderInfo} = LoadRegisteredUserOrder()

    return (
        <div className='pl-10 py-10'>
            <CardHeader floated={false} shadow={false} className="rounded-none mb-8">
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
            
            <div>
                {orderInfo.length !== 0? <div className="pb-5">
                {orderInfo.map(info => (
                    <div key={info._id} className="pb-4 mb-8">
                        <div className="flex items-center gap-5">
                            {info.FoodItem.map( food => (
                                <div>
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

export default MyOrder;