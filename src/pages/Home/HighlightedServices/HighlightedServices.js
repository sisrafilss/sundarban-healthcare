import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import SectionTop from '../../Shared/SectionTop/SectionTop';
import SingleService from '../../Shared/SingleService/SingleService';
import './HighlightedServices.css'

const HighlightedServices = () => {

    const services = useServices();

    const sectionTop = {
        title: 'Services We offer',
        subtitle: 'Our medical specialists care about you & your family’s health'
    }

    return (
        <div className="my-5">
            <SectionTop sectionTop={sectionTop} />
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <SingleService 
                                key={service.id}
                                service={service}
                            /> )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HighlightedServices;