import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password)


    }
    const navigateRegister = (event) => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='container w-50 mx-auto'>
            <div className="row">
                <h2 className='text-primary'>Please Login</h2>
                <Form onSubmit={handleSubmit} className='col-sm-12'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    
                    <Button className='mb-2 d-block w-50 mx-auto' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p>New to Genius Car? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                <p>Forget Password? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;