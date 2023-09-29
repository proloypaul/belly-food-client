import { Avatar, Card, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { LoadRegisteredUserOrder } from '../../../CommonStyle/CommonCode';
 

const MyOrder = () => {
    const {orderInfo} = LoadRegisteredUserOrder()
    const TABLE_HEAD = ["Food Name", "Date", "Location", "Delivery To", "Total Order", "TotalPrice", ""];

    return (
        <div className='pl-10 py-10'>
            <div>
                {orderInfo.length !== 0? <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                variant="small"
                                style={{color: "crimson"}}
                                className="font-bold text-xl font-serif leading-none opacity-70 "
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
                                {info.FoodItem.map(food => (
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
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                {info.DeliveryTo}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium text-center">
                                {/* {info.FoodItem.length} */}
                                {info.FoodItem.map(food => `${food.foodNum}, `)}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                $.{info.totalPriceWithTaxAndDeliver}
                                </Typography>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Card> : <div className="text-black flex justify-center items-center font-serif">
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