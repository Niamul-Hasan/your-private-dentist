import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ serviceName }) => {
    const { name, img, price } = serviceName;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" className='img-fluid w-50 mx-auto' src={img} />
                    <Card.Body className='text-center'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button as={Link} to="/checkout">Get Appoinment</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;