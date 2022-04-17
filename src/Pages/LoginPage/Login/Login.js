import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';

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
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

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
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        LogIN
                    </Button>
                    <p>New in Your Private Dentist? <Button onClick={handleClick} variant="link">Get Registation Now</Button></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;