import { Avatar } from '@material-tailwind/react';
import Usefirebase from '../../../Hooks/Usefirebase';
import { Link } from 'react-router-dom';

const ProfileOverView = () => {
    const {user} = Usefirebase()
    const profileOverViewData = {
        name: `${user?.displayName}`,
        email: `${user?.email}`,
        location: "Dhaka, Bangladesh",
        houseNo: "0",
        phoneNo: "00000000000"
    }
    // const [profileData, setProfileData] = useState(profileOverViewData)
    return (
        <>
        <div className='py-10'>
            <div style={{textAlign: "center"}}>
                <Avatar src={user?.photoURL} alt="avatar" size="xxl" />
                <Link to="/myProfile/editProfile" className='text-pink-500 pl-5' >Edit</Link>
            </div>
            <div className='text-black pt-10 text-xl flex justify-around font-sans'>
                <div className='flex'>
                    <div className='font-bold'>
                        <h1>Name :</h1>
                        <h1 className='py-5'>Email :</h1>
                        <h1>Location :</h1>
                        <h1 className='py-5'>House No :</h1>
                        <h1>Phone No :</h1>
                    </div>
                    <div className='pl-5 font-serif'>
                        <h1>{profileOverViewData?.name}</h1>
                        <h1 className='py-5'>{profileOverViewData?.email}</h1>
                        <h1>{profileOverViewData?.location}</h1>
                        <h1 className='py-5'>{profileOverViewData?.houseNo}</h1>
                        <h1>{profileOverViewData?.phoneNo}</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProfileOverView;