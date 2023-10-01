import { Button, Dialog, DialogFooter} from '@material-tailwind/react';
import React from 'react';
import cookingSvg from '../../../Images/svg/cookingImg.svg'
import { Link } from 'react-router-dom';
import DisplayUserReview from '../../DisplayUserReview/DisplayUserReview';

const SearchResultPopup = ({size, handleOpen, searchData}) => {
    
    return (
        <div>
             <Dialog
                open={
                size === "lg"
                }
                size={size || "lg"}
                handler={handleOpen}
            >
                {/* <DialogHeader>Its a simple dialog.</DialogHeader> */}
                <div className='py-10 px-5'>
                    {searchData?.length !== 0?searchData?.map(data => (
                        <div>
                            <div className='flex items-center justify-around py-2'>
                                <div className='w-2/5 flex items-center justify-center'><img src={data.imgOne} alt='Empty!' width="200px" height="200px"/></div>
                                <div className='w-3/5 font-serif'>
                                    <p className='text-xl font-medium text-black'>{data.name}</p>
                                    <p className='py-3'>{data.description}</p>
                                    <p className='font-bold text-pink-500'>$. {data.price}</p>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button
                                    variant="text"
                                    color="pink"
                                    onClick={() => handleOpen(null)}
                                    className="mr-1"
                                >
                                    <span>Cancel</span>
                                </Button>
                                <Button
                                    variant="gradient"
                                    color="pink"
                                    onClick={() => handleOpen(null)}
                                >
                                    <Link to={`/foodDetails/${data._id}`} >Details</Link>
                                </Button>
                                
                            </DialogFooter>
                        </div>
                    )): <div>
                        <div className='flex items-center justify-center'>
                            <div className='text-center font-serif'>
                                <img src={cookingSvg} alt='Empty!' width="300px" height="200px"/>
                                <p className='text-xl text-black'>We are ready to cook your favorite food</p>
                                <p>Inform us by clicking below</p>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="pink"
                                onClick={() => handleOpen(null)}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button
                                variant="gradient"
                                color="pink"
                                onClick={() => handleOpen(<DisplayUserReview/>)}
                            >
                                <span>Inform Us</span>
                            </Button>
                                
                        </DialogFooter>
                    </div>
                        }
                </div>
            </Dialog>
        </div>
    );
};

export default SearchResultPopup;