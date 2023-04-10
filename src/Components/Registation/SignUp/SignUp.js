import React, { useState } from 'react';
import {BsCameraFill} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import './SignUp.css';
import Usefirebase from '../../../Hooks/Usefirebase';
const SignUp = () => {
    
    const defaultRegisterData = {date: new Date().toLocaleDateString()}
    const [imgUpload, setImgUpload] = useState(false);
    // const [imgLink, setImgLink] = useState('');
    const [userRegisterData, setUserRegisterData] = useState(defaultRegisterData);
    const {signInUsingGoogle, user, error} = Usefirebase();

    console.log(user?.email)
    console.log(user?.photo_URL)
    console.log(error);  

    // handle user img 
    const handleImg = async (e) => {
        setImgUpload(false);
        let imgData = new FormData();
        imgData.set("key", "06a916692ea087d185221539196ef3a5");
        imgData.append('image', e.target.files[0]);
        const res = await window.fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            body: imgData,
        })
        const data = await res.json();
        console.log(data.data.url_viewer);
        setUserRegisterData({image: data.data.url_viewer});
        // setImgLink(data.data.url_viewer);
        setImgUpload(true);
    }
    // collect data from user
    const collectRegisterData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const allUserRegisterData = {...userRegisterData};
        allUserRegisterData[field] = value;
        setUserRegisterData(allUserRegisterData);
    }
    // handle user register data
    const handleRegisterData = (e) => {
        e.preventDefault();
        console.log(userRegisterData);
    }

    return (
        <div className='signUpContainer'>
            <form onClick={() => handleRegisterData()}>
                <label className="fileUpload">
                    <input  type='file' name='image'  onChange={handleImg}/>
                    <span><BsCameraFill/></span>
                    {/* {imgUpload? <img src={imgLink} alt='Empty!' width="200px" height="200px"/>:<span><BsCameraFill/></span>} */}
                    <p>{imgUpload? "Relax Your image Uploaded": ""} </p>
                </label>
                
                <div className='fullName'>
                    <input className='name' type='text' placeholder='First Name' name="FirstName" required onBlur={collectRegisterData}/>
                    <input className='name' type='text' placeholder='Last Name' name="LastName" required onBlur={collectRegisterData}/>
                </div>
                <input className='commonInput' type='email' placeholder='abcd@gmail.com' name="email" required onBlur={collectRegisterData}/>
                <input className='commonInput' type='password' placeholder='Password' name="password" required onBlur={collectRegisterData}/>
                <input className='commonInput' type='password' placeholder='Retype Password' name="retypePassword" required onBlur={collectRegisterData}/>
                <p className='gender'>Gender</p>
                <div className='genderInput'>
                    <input type='radio' name='gender' value='male' required onBlur={collectRegisterData}/>Male
                    <input type='radio' name='gender' value='female' required onBlur={collectRegisterData}/>Female
                </div>
                <div className='formBtn'>
                    <button type='submit' className='commonButton'>Process</button>
                </div>
                <div>
                    <button className='signInWithGoogleBtn' onClick={() => signInUsingGoogle()}><FcGoogle/></button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;