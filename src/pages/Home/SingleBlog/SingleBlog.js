import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBlog = ({ blog }) => {

    const { title, thumbnail, description } = blog;

    return (
        <Col className="">
            <Card className="shadow border-0 card">
                <Card.Img className="card-img" variant="top" src={thumbnail} />
                <Card.Body className="mt-4">
                    <Card.Title className="card-title"> {title} </Card.Title>
                    <Card.Text className="card-description">
                        {description.slice(0, 150) + ' '}
                        [...]
                    </Card.Text>
                    <Link to="#" className="btn btn-outline read-mroe-btn fw-bold">Details</Link>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default SingleBlog;