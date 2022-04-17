import React from 'react';
import { Row } from 'react-bootstrap';
import pic1 from "../../../images/cavity.png";
import Service from './Service';


const Services = () => {
    const serviceNames = [
        { id: 1, name: 'Cavity Care', price: '2000 tk/teeth', img: pic1 },
        { id: 2, name: 'Cavity Care', price: '2000 tk/teeth', img: pic1 },
        { id: 3, name: 'Cavity Care', price: '2000 tk/teeth', img: pic1 },
        { id: 4, name: 'Cavity Care', price: '2000 tk/teeth', img: pic1 },
    ]
    return (
        <div className='container'>
            <h1 className='text-success text-center mt-3'>Available Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                {
                    serviceNames.map(serviceName => <Service
                        key={serviceName.id}
                        serviceName={serviceName}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;