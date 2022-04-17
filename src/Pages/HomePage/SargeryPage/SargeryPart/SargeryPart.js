import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SargeryPart = ({ sergaryCorner }) => {

    const { img, name, description } = sergaryCorner;

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" className='img-fluid w-75 mx-auto' src={img} />
                    <Card.Body className='text-center'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SargeryPart;