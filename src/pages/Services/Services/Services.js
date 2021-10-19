import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import PageTopTitle from '../../Shared/PageTopTitle/PageTopTitle';
import SectionTop from '../../Shared/SectionTop/SectionTop';
import SingleService from '../../Shared/SingleService/SingleService';
import './Services.css'

const Services = () => {

    const services = useServices('./services.json');
    console.log(services);

    const pageTopTitle = {
        title: 'Our Services',
        subtitle: 'We take care of your health'
    }
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
            <div>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {/* {Array.from({ length: 4 }).map((_, idx) => (
                            
                    ))} */}
                    {
                        services.map(service => <SingleService 
                                key={service.id}
                                service={service}
                            /> )
                    }
                        
                        
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Services;