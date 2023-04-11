import React, { useState } from 'react';
import {BsCameraFill} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import './SignUp.css';
import Usefirebase from '../../../Hooks/Usefirebase';
import { useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {
    
    const defaultRegisterData = {date: new Date().toLocaleDateString()}
    const [imgUpload, setImgUpload] = useState(false);
    // const [imgLink, setImgLink] = useState('');
    const [userRegisterData, setUserRegisterData] = useState(defaultRegisterData);
    const navigation = useNavigate();
    const location = useLocation();
    const {signInUsingGoogle, registerUsingEmailAndPassword, error} = Usefirebase();


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
        // console.log(data.data.url_viewer);
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
        e.preventDefault()
        // console.log(userRegisterData);
        if(userRegisterData.password === userRegisterData.retypePassword){
            registerUsingEmailAndPassword(userRegisterData.email, userRegisterData.password, userRegisterData.image, userRegisterData.FirstName, userRegisterData.LastName, navigation);
            alert("Registered successfully!");
            e.target.reset();
        }else{
            alert("Please type same password in retype field");
        }
        
    }

    return (
        <div className='signUpContainer'>
            <form onSubmit={handleRegisterData}>
                <label className="fileUpload">
                    <input  type='file' name='image'  onChange={handleImg}/>
                    <span><BsCameraFill/></span>
                    {/* {imgUpload? <img src={imgLink} alt='Empty!' width="200px" height="200px"/>:<span><BsCameraFill/></span>} */}
                    <p className='successMsg'>{imgUpload? "Relax Your Image Uploaded": ""} </p>
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
                <p className='errorMsg'>{error}</p>
                <div>
                    <button className='signInWithGoogleBtn' onClick={() => signInUsingGoogle(navigation, location)}><FcGoogle/></button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;