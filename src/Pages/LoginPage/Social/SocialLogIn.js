import React from 'react';
import { Button } from 'react-bootstrap';
import google from "../../../images/google.png";
import github from "../../../images/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../Firebase.init';

const SocialLogIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || gitError) {
        errorElement = <p>Error: {error.message}</p>;
    }

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (loading || gitLoading) {
        return <Loading></Loading>;
    }
    if (user || gitUser) {
        navigate(from, { replace: true });
    }
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div className="bg-primary w-50" style={{ height: 1 }}></div>
                <div>OR</div>
                <div className="bg-primary w-50" style={{ height: 1 }}></div>
            </div>
            <div>
                {errorElement}
            </div>

            <Button
                onClick={() => signInWithGoogle()}
                className='btn btn-warning w-50 d-block mx-auto my-2'>
                <img src={google} style={{ width: 25 }} className='me-3' alt="" />
                Google Sign In</Button>
            <Button
                onClick={() => signInWithGithub()}
                className='btn btn-warning w-50 d-block mx-auto my-2'>
                <img src={github} style={{ width: 25 }} className='me-3' alt="" />
                Github Sign In</Button>
        </div>
    );
};

export default SocialLogIn;