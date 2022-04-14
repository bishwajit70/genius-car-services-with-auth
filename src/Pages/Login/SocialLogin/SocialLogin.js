import React from 'react';
import googleIcon from '../../../images/social/google.png'
import facebookIcon from '../../../images/social/facebook.png'
import githubIcon from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate()

    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>;
    }
    if (user || user1) {
        navigate('/')
    }

    return (

        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='d-flex flex-column align-items-center pb-5'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-warning d-block w-50'>
                    <img style={{ height: '30px' }} src={googleIcon} alt="" />
                    <span className='ps-3 text-white'>Google Sign In</span>
                </button>
                <button

                    className='btn btn-warning d-block w-50 my-2'>
                    <img style={{ height: '30px' }} src={facebookIcon} alt="" />
                    <span className='ps-3 text-white'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-warning d-block w-50'>
                    <img style={{ height: '30px' }} src={githubIcon} alt="" />
                    <span className='ps-3 text-white'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;