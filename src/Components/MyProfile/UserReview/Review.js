import { Button, Rating, Spinner } from '@material-tailwind/react';
import React from 'react';
import Usefirebase from '../../../Hooks/Usefirebase';
import { usePostUserReviewMutation } from '../../../redux/features/api/apiSlice';
import Swal from 'sweetalert2';

const Review = () => {
    const [rated, setRated] = React.useState(4);
    const [userReviewsData, setUserRegisterData] = React.useState([]);

    const {user} = Usefirebase()

    const [postedReview, {isLoading, isSuccess, isError}] = usePostUserReviewMutation()

    console.log("isSuccess", isSuccess, "isError", isError)
    if(isSuccess && !isError){
        Swal.fire(
            '!Submited',
            'We Are Accept Your Compliment',
            'success'
        )
    }
    // collect reviews data 
    const collectReviewsData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const allUserRegisterData = {...userReviewsData};
        allUserRegisterData[field] = value;
        const includeLoignData = {...allUserRegisterData, img: user?.photoURL, rating: rated}
        setUserRegisterData(includeLoignData);
    }
    // handle reviews data
    const handleReviewsData = (e) => {
        e.preventDefault()
        // console.log(userReviewsData)
        const options = {
            data: userReviewsData
        }

        if(userReviewsData.email === user?.email){
            postedReview(options)
            e.target.reset()
        }else{
            Swal.fire(
                "Your Email Is Not Valid?",
                "Pleased Used Your Registered Email",
                "question"
              );
        }

    }

    

    return (
        <div>
            <h1 className='text-xl font-serif pt-10 pl-10'>We Are Pleased To See You Here</h1>
            <div className='flex items-center justify-center py-10 font-serif gap-2' >
                <form className='reviewForm' onSubmit={handleReviewsData}>
                    <div>
                        <input type='text' name='name' placeholder={`Enter ${user?.displayName}`} onBlur={collectReviewsData} required/>
                    </div>
                    <div>
                        <input type='email' name='email' placeholder={`Enter ${user?.email}`} onBlur={collectReviewsData} required/>
                    </div>
                    <div>
                        <textarea name='compliment' placeholder='GIve us your compliment' rows="4" onBlur={collectReviewsData} required></textarea>
                    </div>
                    <div className="flex items-center gap-2 items-center py-5">
                        <Rating value={4} onChange={(value) => setRated(value)} />
                        <p color="blue-gray" className="font-bold">
                            {rated}.0 Rated
                        </p>
                    </div>
                    <Button type='submit' fullWidth> {isLoading? `${<Spinner color="pink" />} Processing..`: "Give us your Compliment"}</Button>
                </form>
            </div>
        </div>
    );
};

export default Review;