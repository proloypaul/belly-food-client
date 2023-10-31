import { Avatar } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useGetfoodDataQuery } from '../../../../redux/features/api/apiSlice';
import Swal from 'sweetalert2';
import { ThreeCircles } from 'react-loader-spinner';


const ManageFood = () => {
    const [foodData, setfoodData] = useState([])
    // collect user reviews data using redux
    const {data, isLoading} = useGetfoodDataQuery()
    useEffect(() => {
        setfoodData(data)
    }, [data])

     const handleFoodDlt = (id, userInfo, setfoodData) => {
        Swal.fire({
          title: "Are You Sure!",
          text: "It will be deleted also your Database history!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            const url = `https://belly-food-server.onrender.com/foods/${id}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log("deleted order Data", data)
                if (data.deletedCount > 0) {
                  const withOutDeletedCart = userInfo.filter(
                    (carts) => carts._id !== id
                  );
                  setfoodData(withOutDeletedCart);
                  Swal.fire("Deleted!", "This User has been deleted.", "success");
                }
              });
          }
        });
      };

    // fetch food using redux
    return (
        <div className='py-10 pl-5'>
            {isLoading? <div className="loaderStyle">
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="crimson"
            innerCircleColor="black"
            middleCircleColor="crimson"
          />
        </div>:<div className='grid grid-cols-3 gap-4'>
                {foodData?.map(food => <div className='px-3 my-5 bg-black border-0 rounded-md text-center text-pink-300'>
                    <div style={{marginTop: "-30px"}}>
                        <Avatar src={food.imgOne} alt='Empty!' withBorder={true} color="pink"/>
                    </div>
                    <div className='py-5'>
                        <p className='font-bold'>{food.name}</p>
                        <p>Price: $.{food.price}</p>
                        <p className='font-bold'>category: {food.type}</p>
                    </div>
                    <p className='text-white'>{food.description}</p>
                    <button className="text-red-900 text-xl py-2" onClick={() => handleFoodDlt(food._id, foodData, setfoodData)}>
                        <RiDeleteBinFill/>
                    </button>
                </div>)}
            </div>}
            
        </div>
    );
};

export default ManageFood;