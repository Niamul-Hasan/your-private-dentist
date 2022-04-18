import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import banner from "../../../../images/banner.jpg";

const Banner = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/about");
    }

    const inputRef = useRef('');
    const handleSearch = () => {
        const input = inputRef.current.value;
        if (input === '') {
            return;
        }
        navigate(`/${input}`);
    }

    return (
        <div className='d-flex justify-content-around pt-5' style={{
            backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
            height: 500
        }}>
            <div>
                <h1 className='fs-1'>Your Teeth Needs</h1>
                <h1>Your Private Dentist</h1>
                <p>If you want to smile for a long run then you must have a private dentist consultant.
                    <br />You have your private dentist here. Choose an appoinment now.
                </p>
                <Button onClick={handleClick}>See Me</Button>
            </div>
            <div>
                <input ref={inputRef} className='rounded-right me-2' type="text" placeholder='search here' />
                <input onClick={handleSearch} type="button" value="Search" />

            </div>
        </div>
    );
};

export default Banner;