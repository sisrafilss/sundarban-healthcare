import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import PageTopTitle from '../../Shared/PageTopTitle/PageTopTitle';
import SectionTop from '../../Shared/SectionTop/SectionTop';
import SingleService from '../../Shared/SingleService/SingleService';
import './Services.css'

const Services = () => {

    // Loading Services data
    const services = useServices('./services.json');

    // Page Top tiltle props object
    const pageTopTitle = {
        title: 'Our Services',
        subtitle: 'We take care of your health'
    }

    // Section Top props object
    const sectionTop = {
        title: 'Featured Clinical Services For Patients',
        subtitle: 'Our medical specialists care about you & your family’s health'
    }

    return (
        <div>
            <div>
                <PageTopTitle pageTopTitle={pageTopTitle} />
                <div className="my-5"></div>
                <SectionTop sectionTop={sectionTop} />
            </div>
            <div className="mb-5">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service => <SingleService
                                key={service.id}
                                service={service}
                            />)
                        }


                    </Row>
                    {/* This Button is Static */}
                    <div className="mt-5 d-grid">
                        <Link className="btn btn-load-more" to="#">Load More</Link>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default Services;