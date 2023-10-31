import React, { useEffect, useState } from 'react';
import { Avatar} from '@material-tailwind/react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useGetUserReviewQuery } from '../../../../redux/features/api/apiSlice';
import Swal from 'sweetalert2';
import { ThreeCircles } from 'react-loader-spinner';

const ManageReview = () => {
    const [reviewData, setReviewData] = useState([])
    // collect user reviews data using redux
    const {data, isLoading} = useGetUserReviewQuery()

    useEffect(() => {
        setReviewData(data)
    }, [data])

     const handleReviewDlt = (id, userInfo, setReviewData) => {
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
            const url = `https://belly-food-server.onrender.com/reviews/${id}`;
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
                  setReviewData(withOutDeletedCart);
                  Swal.fire("Deleted!", "This User has been deleted.", "success");
                }
              });
          }
        });
      };

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
        </div>: <div className='grid grid-cols-3 gap-4'>
            {reviewData?.map(review => <div className='px-3 my-5 bg-black border-0 rounded-md text-center text-pink-300'>
                <div style={{marginTop: "-30px"}}>
                    <Avatar src={review.img} alt='Empty!' withBorder={true} color="pink"/>
                </div>
                <div className='py-5'>
                    <p className='font-bold'>{review.name}</p>
                    <p>{review.email}</p>
                </div>
                <p className='text-white'>{review.compliment}</p>
                <button className="text-red-900 text-xl py-2" onClick={() => handleReviewDlt(review._id, reviewData, setReviewData)}>
                    <RiDeleteBinFill/>
                </button>
            </div>)}
          </div>}
        </div>
       
    );
};

export default ManageReview;