import React from 'react';
import PageTopTitle from '../../Shared/PageTopTitle/PageTopTitle';
import about1 from '../../../images/about/about-1.jpg';

const About = () => {

    const pageTopTitle = {
        title: 'About Us',
        subtitle: 'Helping to liveing you healty life is our goal.'
    }

    return (
        <div>
            <div>
                <PageTopTitle pageTopTitle={pageTopTitle} />
            </div>
            <div className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h2 style={{fontWeight: '500'}} class="display-6 mb-4">We Offer
                            <br />
                             <span className="fw-bold">Fast & Reliable</span> 
                             <br />
                             <span style={{color: '#EA6428'}}> Medical & HealthCare Solutions to Our Patients </span> </h2>

                            <p className="card-description lead">Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card">
                            <img src={about1} className="img-fluid card-img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;