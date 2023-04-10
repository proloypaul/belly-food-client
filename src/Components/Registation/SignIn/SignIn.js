import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';


const SignIn = () => {
    return (
        <div className='signUpContainer'>
            
            <form>
                <input className='commonInput' type='email' placeholder='abcd@gmail.com'/>
                <input className='commonInput' type='password' placeholder='Enter password'/>
                <button className='commonButton'>Sign In</button>
            </form>
            <p>Haven't Register Yet <Link to="/signUp">Register fast</Link></p>
        </div>
    );
};

export default SignIn;