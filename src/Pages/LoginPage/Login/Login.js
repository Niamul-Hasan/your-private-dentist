import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogIn from '../Social/SocialLogIn';

const Login = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/register");
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLogIn = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);

        await signInWithEmailAndPassword(email, password);
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (!email) {
            return alert("Please enter your valid email");
        }
        sendPasswordResetEmail(email);
        alert("Check your email to reset password");
    }
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container pt-5 w-50'>
            <div className='container w-50 shadow p-3 mb-5 bg-body rounded'>
                <h1>Please Log In</h1>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">LogIn</Button>

                    <p>Forget Password?<Button onClick={handleResetPassword} variant="link">Click to Reset Password</Button></p>
                    <p>New in Your Private Dentist? <Button onClick={handleClick} variant="link">Get Registation Now</Button></p>
                </Form>
                <SocialLogIn></SocialLogIn>
            </div>
        </div>
    );
};

export default Login;