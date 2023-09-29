import { Button, Rating } from '@material-tailwind/react';
import React from 'react';
import Usefirebase from '../../../Hooks/Usefirebase';

const Review = () => {
    const [rated, setRated] = React.useState(4);

    const {user} = Usefirebase()

    return (
        <div>
            <h1 className='text-xl font-serif pt-10 pl-10'>We Are Pleased To See You Here</h1>
            <div className='flex items-center justify-center py-10 font-serif gap-2' >
                {/* <div>
                    <img src={user?.photoURL} alt="avatar"  width="200px"/>
                </div> */}
                <form className='reviewForm'>
                    <div>
                        <input type='text' name='name' value={user?.displayName} required/>
                    </div>
                    <div>
                        <input type='email' name='email' value={user?.email} required/>
                    </div>
                    <div>
                        <textarea name='compliment' placeholder='GIve us your compliment' rows="4"></textarea>
                    </div>
                    <div className="flex items-center gap-2 items-center py-5">
                        <Rating value={4} onChange={(value) => setRated(value)} />
                        <p color="blue-gray" className="font-bold">
                            {rated}.0 Rated
                        </p>
                    </div>
                    <Button type='submit' fullWidth>Give us your Compliment</Button>
                </form>
            </div>
        </div>
    );
};

export default Review;