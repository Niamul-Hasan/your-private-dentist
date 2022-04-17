import React from 'react';
import { Row } from 'react-bootstrap';
import pic1 from "../../../images/cavity.png";
import pic2 from "../../../images/cracked.png";
import pic3 from "../../../images/impacted.png";
import pic4 from "../../../images/toothache.png";
import pic5 from "../../../images/periodonta.png";
import pic6 from "../../../images/halitosis.png";
import Service from './Service';


const Services = () => {
    const serviceNames = [
        { id: 1, name: 'Cavity Care', price: '2000 tk/teeth', img: pic1 },
        { id: 2, name: 'Cracked Care & Repair', price: '2500 tk/teeth', img: pic2 },
        { id: 3, name: 'Impaction Sargery', price: '3500 tk/teeth', img: pic3 },
        { id: 4, name: 'Relief from Toothache', price: '2000 tk/teeth', img: pic4 },
        { id: 4, name: 'Periodonta Recovery', price: '2700 tk/teeth', img: pic5 },
        { id: 4, name: 'Halitosis Solution', price: '4000 tk', img: pic6 },
    ]
    return (
        <div className='container'>
            <h1 className='text-success text-center mt-3'>Available Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
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