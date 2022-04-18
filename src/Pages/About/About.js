import React from 'react';
import myPic from "../../images/zead.png";

const About = () => {
    return (
        <div className='container'>
            <div className='container d-flex justify-content-center align-items-center gx-4 w-80 mx-auto'>
                <div className='m-3 shadow p-3 mb-5 bg-body rounded'>
                    <img src={myPic} className="m-3 " height={400} width={300} alt="" />
                    <p className='text-center text-primary' style={{ fontFamily: 'cursive' }}><samll>I am Niamul Hasan Zead</samll></p>
                </div>
                <div className='shadow p-3 mb-5 bg-body rounded'>
                    <h3 style={{ color: 'teal' }}>My Vision</h3>
                    <p className='d-block align-items-center fs-4' style={{ fontFamily: 'sans-serif' }}>It is my die hard passion to be a full stack web developer. I also want to know deeply about font end and back end engineering.Though I have many more deficulties in this run,I never feel dulnes on this mission.I am still fighting to achive my goal.I am so much hopefull to finish this race with a great achivement.  </p>
                </div>
            </div>

        </div>
    );
};

export default About;