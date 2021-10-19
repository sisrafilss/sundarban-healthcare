import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleService.css'
import { Link, useParams } from "react-router-dom";

const SingleService = ({ service }) => {

    const { id, title, thumbnail, description } = service;

    return (
        <Col className="">
            <Card className="shadow border-0 card">
                <Card.Img class="card-img" variant="top" src={thumbnail} />
                <Card.Body className="mt-4">
                    <Card.Title className="card-title"> {title} </Card.Title>
                    <Card.Text className="card-description">
                        {description.slice(0, 150) + ' ' } 
                        [...]
                    </Card.Text>
                    <Link to={`/service/${id}`} className="btn btn-outline read-mroe-btn">Read More</Link>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default SingleService;