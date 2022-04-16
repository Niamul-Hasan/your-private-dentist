import React from 'react';
import { Button } from 'react-bootstrap';
import banner from "../../../../images/banner.jpg";

const Banner = () => {
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
                <Button>See More</Button>
            </div>
            <div>
                <input className='rounded-right me-2' type="text" placeholder='search here' />
                <input type="button" value="Search" />

            </div>
        </div>
    );
};

export default Banner;