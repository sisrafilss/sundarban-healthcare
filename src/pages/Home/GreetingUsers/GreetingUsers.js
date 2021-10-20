import React from 'react';
import SectionTop from '../../Shared/SectionTop/SectionTop';
import doctorIcon from '../../../images/icons/doctor.png';
import firstAidKit from '../../../images/icons/first-aid-kit.png';
import technology from '../../../images/icons/technology.png';
import './GreetingUsers.css'

const GreetingUsers = () => {

    // Section Top props object
    const sectionTop = {
        title: 'Welcome to Sundarban Healthcare',
        subtitle: 'Our medical specialists care about you & your family’s health'
    }

    return (
        <div style={{ marginTop: '80px', marginBottom: '80px' }}>
            <div className="container">
                <SectionTop sectionTop={sectionTop} />
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-12 single-item">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <div className="mb-4">
                                <img src={doctorIcon} className="img-fluid" style={{ height: "50px", width: "50px" }} alt="" />
                            </div>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <h3 className="text-dark">HealthCare Professionals</h3>
                                <p className="card-description px-3">SThe healthcare workforce comprises a wide variety of professions and occupations who provide some type of healthcare service, including such direct care practitioners as...</p>
                                <button className="btn btn-info">Learn More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 single-item">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <div className="mb-4">
                                <img src={firstAidKit} className="img-fluid" style={{ height: "50px", width: "50px" }} alt="" />                        </div>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <h3 className="text-dark">Medical Excellence</h3>
                                <p className="card-description px-3">Clinical excellence must be the priority for any health care system. ... According to the federal Agency for Healthcare Research and Quality (AHRQ), exceptional healthcare is... </p>
                                <button className="btn btn-info">Learn More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <div className="mb-4">
                                <img src={technology} className="img-fluid" style={{ height: "50px", width: "50px" }} alt="" />                        </div>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <h3 className="text-dark">Latest Technologies</h3>
                                <p className="card-description px-3">Emerging technologies are technologies whose development, practical applications, or both are still largely unrealized, such that they...</p>
                                <button className="btn btn-info">Learn More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreetingUsers;