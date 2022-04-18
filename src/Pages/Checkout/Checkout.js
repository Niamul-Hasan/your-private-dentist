import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {

    const handleApoinment = async (event) => {
        event.preventDefault();

    }
    return (
        <div className='container pt-5 w-50'>
            <h3 style={{ color: 'coral', textAlign: 'center' }}>Please Fill-up the Form and Confirm your service. { }</h3>
            <div className='container w-50 shadow p-3 mb-5 bg-body rounded'>
                <h3 style={{ color: 'teal' }}>Required Service ID: { }</h3>
                <Form onSubmit={handleApoinment}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Patient's Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Patient's Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Phone Number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Fix an Apoinment</Form.Label>
                        <Form.Control type="date" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Confirm
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;