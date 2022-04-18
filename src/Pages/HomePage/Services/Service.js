import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ serviceName }) => {
    const { name, img, price, id, description } = serviceName;
    const navigate = useNavigate();
    const handleApoinment = () => {
        navigate(`/checkout/${id}`);
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" className='img-fluid w-50 h-80 mx-auto' src={img} />
                    <Card.Body className='text-center'>
                        <Card.Title style={{ color: "teal", fontSize: '24px' }}>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text> <span className='fs-4 text-warning'>{price}</span> </Card.Text>
                        <Button onClick={handleApoinment}>Get Appoinment</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;