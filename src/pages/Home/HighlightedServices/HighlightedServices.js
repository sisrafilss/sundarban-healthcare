import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import SectionTop from '../../Shared/SectionTop/SectionTop';
import SingleService from '../../Shared/SingleService/SingleService';
import './HighlightedServices.css'

const HighlightedServices = () => {

    const services = useServices('./services2.json');

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
                        />)
                    }
                </Row>
                <div className="mt-5 d-grid">
                    <Link className="btn btn-load-more" to="/services">All Services</Link>
                </div>
            </Container>
        </div>
    );
};

export default HighlightedServices;