import { Avatar } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { handleUserDlt } from '../../../../CommonStyle/CommonCode';


const ManageUser = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        const url = "https://belly-food-server.onrender.com/users"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
            })
    })
    return (
        <div className='py-10 pl-5'>
            <div className='grid grid-cols-3 gap-4'>
                {userData.map(user => <div className='px-3 my-5 bg-black border-0 rounded-full text-center text-pink-300'>
                    <div style={{marginTop: "-30px"}}>
                        <Avatar src={user.image} alt='Empty!' withBorder={true} color="pink"/>
                    </div>
                    <div className='py-5'>
                        <p className='font-bold'>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                    <button className="text-red-900 text-xl" onClick={() => handleUserDlt(user._id, userData, setUserData)}>
                        <RiDeleteBinFill/>
                    </button>
                </div>)}
            </div>
        </div>
    );
};

export default ManageUser;