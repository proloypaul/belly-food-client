import React from 'react';
import { useGetUserReviewQuery } from '../../redux/features/api/apiSlice';
import { Avatar, Card, CardBody, CardHeader, Carousel, Rating, Typography } from '@material-tailwind/react';

const DisplayUserReview = () => {

    // collect user reviews data using redux
    const {data} = useGetUserReviewQuery()


    return (
        <div className='py-20 my-10'>
            <Carousel
                className="rounded-xl py-10 bg-black"
                autoplay={true}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                        />
                    ))}
                    </div>
                )}
                >
                    {data?.map(review => (
                    <div className=' flex items-center justify-center'>
                        <Card color="transparent" shadow={true} className=" py-5 pl-10">
                            <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="mx-0 flex items-center gap-4 pt-0 pb-8"
                            >
                            <Avatar
                                size="lg"
                                variant="circular"
                                src={review.img}
                                withBorder={true}
                                color="pink"
                                alt="tania andrew"
                            />
                            <div className="flex flex-col gap-0.5">
                                <div className="flex items-center justify-between text-white">
                                <Typography variant="h5">
                                    {review.name}
                                </Typography>
                                </div>
                                
                                <Typography color="blue-gray" className='flex items-center'><Rating unratedColor="pink" ratedColor="pink" value={review.rating} /></Typography>
                            </div>
                            </CardHeader>
                            <CardBody className="mb-6 p-0">
                            <Typography className='w-64'>
                                {review.compliment}
                            </Typography>
                            </CardBody>
                        </Card>
                    </div>
                ))}
                </Carousel>
        </div>
    );
};

export default DisplayUserReview;