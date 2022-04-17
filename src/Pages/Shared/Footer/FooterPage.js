import React from 'react';
import { Link } from 'react-router-dom';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from '@heroicons/react/solid';
import "./FooterPage.css";


const FooterPage = () => {
    return (
        <div className="footer">
            <div className="inner-footer">

                {/* for company name and description */}
                <div className="footer-items">
                    <h1 className='text-warning'>Your Private Dentist</h1>
                    <p>Whenever you need the best care of your teeth</p>
                    <p>Be sure you have an appoinment to me.</p>
                </div>

                {/* for quick links */}
                <div className="footer-items">
                    <h3>Quick Links</h3>
                    <div className="border1"></div>

                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/login"><li>LogIn</li></Link>
                    </ul>
                </div>



                {/* for contact us info */}
                <div className="footer-items">
                    <h3>Contact us</h3>
                    <div className="border1"></div>
                    <ul>
                        <li><LocationMarkerIcon style={{ width: '25px' }} /> Dhaka,Bangladesh</li>
                        <li><PhoneIcon style={{ width: '25px' }} /> 123456789</li>
                        <li><MailIcon style={{ width: '25px' }} /> zead@gmail.com</li>
                    </ul>


                </div>
            </div>

            {/* Footer Bottom start  */}
            <div className="footer-bottom">
                Copyright &copy; Your Private Dentist 2022.
            </div>
        </div>
    );
};

export default FooterPage;