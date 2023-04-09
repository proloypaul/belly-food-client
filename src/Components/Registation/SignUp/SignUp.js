import React from 'react';
import {BsCameraFill} from 'react-icons/bs';
import './SignUp.css';
const SignUp = () => {
    return (
        <div className='signUpContainer'>
            {/* <h1>SignUp section</h1> */}
            <form>
                <label className="fileUpload">
                    <input  type='file' name='image' required/>
                    <span><BsCameraFill/></span>
                </label>
                {/* <p>Display upload img msg</p> */}
                <div className='fullName'>
                    <input className='name' type='text' placeholder='First Name'/>
                    <input className='name' type='text' placeholder='Last Name'/>
                </div>
                <input className='commonInput' type='email' placeholder='abcd@gmail.com'/>
                <input className='commonInput' type='password' placeholder='Password'/>
                <input className='commonInput' type='password' placeholder='Retype Password'/>
                <p className='gender'>Gender</p>
                <div className='genderInput'>
                    <input type='radio' name='gender' value='male'/>Male
                    <input type='radio' name='gender' value='female'/>Female
                </div>
                <div className='formBtn'>
                    <button type='submit' className='commonButton'>Process</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;