import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../Firebase.init";
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import SocialLogIn from '../Social/SocialLogIn';

const Register = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);
    }

    const navigate = useNavigate();
    if (loading) {
        return <Loading></Loading>;
    }
    let errorElement;
    if (error) {
        errorElement = error.message;
    }
    if (user) {
        navigate("/");
    }

    return (
        <div className='container pt-5 w-100'>
            <div className='container w-50 shadow p-3 mb-5 bg-body rounded'>
                <h1 style={{ color: 'teal' }}>Please Register</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Patient's Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
                    </Form.Group>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label={<span className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} >Agree with Terms and Conditions</span>} />
                    </Form.Group>
                    <Button disabled={!agree} onClick={handleRegister} variant="primary" type="submit">
                        Register
                    </Button>
                    <p className="text-danger fs-4">{errorElement}</p>
                    <p>Already have an account? <Button as={Link} to="/login" variant="link" className="text-decoration-none text-primary">LogIn</Button></p>
                </Form>
                <SocialLogIn></SocialLogIn>
            </div>
        </div>
    );
};

export default Register;