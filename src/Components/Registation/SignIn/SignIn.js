import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import Usefirebase from '../../../Hooks/Usefirebase';
import bellyFoodLogo from '../../../Images/logo.png'
import Swal from 'sweetalert2';

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
        Swal.fire("!LogIn", "LogIn Successfully😊", "success");
        // console.log(signInData);
    }
    return (
        <div className='signUpContainer'>
            <div>
                <div style={{textAlign: 'center', paddingBottom: '50px'}}>
                    <img src={bellyFoodLogo} alt='Empty!' width='200px' height='100px'/>
                </div>
                <form onSubmit={handleSignInData}>
                    <input className='commonInput' type='email' name='email' placeholder='abcd@gmail.com' required onBlur={collectSignInData}/>
                    <input className='commonInput' type='password' name='password' placeholder='Enter password' required onBlur={collectSignInData}/>
                    <div className='formBtn'>
                        <button className='commonButton' type="submit">Sign In</button>
                    </div>
                    <p className='errorMsg'>{error}</p>
                    <p className='signInMsg'>Haven't Register Yet <Link to="/signUp">Register fast</Link></p>
                </form>
                <div className='singInAllButton'>
                    <button className='signInWithGoogle' onClick={() => signInUsingGoogle(navigation, location)}><FcGoogle/></button>
                    <button className='signInWithFacebookBtn' onClick={() => signInUsingGoogle(navigation, location)}><FaFacebookF/></button>
                    <button className='signInWithGithubBtn' onClick={() => signInUsingGoogle(navigation, location)}><AiFillGithub/></button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;