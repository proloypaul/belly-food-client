import React, { useState } from 'react';
import { BsFillImageFill } from 'react-icons/bs';
import { usePostFoodDataMutation } from '../../../../redux/features/api/apiSlice';
import { Spinner } from '@material-tailwind/react';
import Swal from 'sweetalert2';

const AddFood = () => {
    const foodPublishData = new Date().toLocaleDateString()
    const [foodData, setFoodData] = useState()
    const [imgUpload, setImgUpload] = useState(false)

    const [postedFoodData, {isLoading, isSuccess, isError}] = usePostFoodDataMutation()

    if(isSuccess && !isError){
        Swal.fire(
            '!Submited',
            'We Are Accept Your food',
            'success'
        )
    }
    // handle user img 
    const handleProductImg = async (e) => {
    setImgUpload(false)
    let imgData = new FormData();
    imgData.set("key", "06a916692ea087d185221539196ef3a5");
    imgData.append('image', e.target.files[0]);
    const res = await window.fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: imgData,
    })
    const data = await res.json();
    setFoodData({imgOne: data.data.display_url, foodPublishData:foodPublishData });
    // setImgLink(data.data.url_viewer);
    setImgUpload(true);
    }

    const collectFoodData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const allFoodData = {...foodData};
        allFoodData[field] = value;
        setFoodData(allFoodData)   
    }

    const handleFoodData = (e) => {
        e.preventDefault()
        // console.log(foodData)
        foodData["price"] = parseInt(foodData.price)

        const options = {
            data: foodData
        }
        postedFoodData(options)
        e.target.reset()
    }

    return (
        <div className='pl-10 py-10'>
            <form className='font-serif' onSubmit={handleFoodData}>
                <label className="fileUpload">
                    <input  type='file' name='imgOne'  onChange={handleProductImg} required  onBlur={collectFoodData}/>
                    <p  className='flex justify-center text-7xl'><BsFillImageFill/></p>
                    {imgUpload? <p className='successMsg'>Your Image Uploaded</p>: <p className='text-center mt-5'>Upload Food Image</p>}
                </label>
                <div className='flex gap-10 items-center mt-10'>
                    <p className='font-bold text-xl'>Food Name</p>
                    <input className='p-2 border-2 rounded-md border-pink-400 w-2/5' type="text" name="name" placeholder='Food Name...' required onBlur={collectFoodData}/>
                </div>
                <div className='flex gap-10 items-center my-3'>
                    <p className='font-bold text-xl'>Set Price</p>
                    <input className='p-2 border-2 rounded-md border-pink-400 w-1/5' type="number" name="price" placeholder='$.' required onBlur={collectFoodData}/>
                </div>
                <div className='flex gap-10 items-center'>
                    <p className='font-bold text-xl'>Select Type</p>
                    <select name="type" className='p-2 border-2 rounded-md border-pink-400 w-1/5' required onBlur={collectFoodData}>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>
                </div>
                <div className='flex gap-10 items-center my-3'>
                    <p className='font-bold text-xl'>Message</p>
                    <input className='p-2 border-2 rounded-md border-pink-400 w-2/5' type="text" name="msg" placeholder='Give a Message...' required onBlur={collectFoodData}/>
                </div>
                <div>
                    <p className='font-bold text-xl'>Description</p>
                    <textarea type="text" name="description" rows={8} placeholder='describe about your food...' required onBlur={collectFoodData}></textarea>
                </div>
                <div>
                    <button type='submit' className='bg-pink-400 text-white text-center border-0 rounded-md py-2  mt-5 w-1/5'>{isLoading? <p className='flex'><Spinner/> <span>Procesing..</span></p>: "Add Food"} </button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;