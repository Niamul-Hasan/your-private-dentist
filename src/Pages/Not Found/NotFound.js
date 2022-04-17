import React from 'react';
import error from "../../images/404.png";

const NotFound = () => {
    return (
        <div>
            <h3 className="text-danger text-center mt-5">Sorry....Your page is not Found</h3>
            <div className='container text-center'>
                <img src={error} alt="" className='w-50' />
            </div>
        </div>
    );
};

export default NotFound;