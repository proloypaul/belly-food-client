import React, { useState } from 'react';
import './SignIn.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import Usefirebase from '../../../Hooks/Usefirebase';


const SignIn = () => {
    const {loginWithEmailAndPassword, signInUsingGoogle, error} = Usefirebase();
    const [signInData, setSignInData] = useState({});
    const navigation = useNavigate();
    const location = useLocation();
    
    const collectSignInData = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const allSignInData = {...signInData};
        allSignInData[field] = value;
        setSignInData(allSignInData);
    }
    const handleSignInData = e => {
        e.preventDefault();
        loginWithEmailAndPassword(signInData.email, signInData.password, navigation, location);
        // console.log(signInData);
    }
    return (
        <div className='signUpContainer'>
            <div>
                <form onSubmit={handleSignInData}>
                    <input className='commonInput' type='email' name='email' placeholder='abcd@gmail.com' required onBlur={collectSignInData}/>
                    <input className='commonInput' type='password' name='password' placeholder='Enter password' required onBlur={collectSignInData}/>
                    <div className='formBtn'>
                        <button className='commonButton' type="submit">Sign In</button>
                    </div>
                    <p className='errorMsg'>{error}</p>
                    <p className='signInMsg'>Haven't Register Yet <Link to="/signUp">Register fast</Link></p>
                </form>
                <div>
                    <button className='signInWithGoogleBtn' onClick={() => signInUsingGoogle(navigation, location)}><FcGoogle/></button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;