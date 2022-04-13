import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }

    }
    if (user) {
        navigate('/')
    }



    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="email" placeholder='Email Address' required />
                <br />
                <input type="password" name="password" id="password" required />
                <br />
                <div className='d-flex align-items-center mb-3'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree?'ps-2':'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                </div>


                <input
                    disabled={!agree}
                    className='bg-primary w-50 mx-auto border-0 rounded text-white' type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;