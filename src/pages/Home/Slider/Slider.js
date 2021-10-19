import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slide1 from '../../../images/slider/slide-1.jpg';
import slide2 from '../../../images/slider/slide-2.jpg';
import slide3 from '../../../images/slider/slide-3.jpg';
import './Slider.css'


const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div >
            <Carousel className="slide-container" variant="dark">
            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="slide-caption">
                        <h5 className="slide-title p-3 d-inline-block rounded mb-0">A Team of Medical Professionals</h5>
                        <br />
                        <p className="slide-title-2 p-2 my-0 d-inline-block rounded">To Take Care of Your Health</p>
                        <br />
                        <p className="slide-short-description mt-0 mb-1 p-2 d-inline-block rounded">We stand ahead in quality and integrity</p>
                        <br />
                        <Link to="/services" className="btn-regular rounded-pill btn mt-0">View Services &nbsp; <i className="fas fa-plus"></i></Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="slide-caption">
                        <h5 className="slide-title p-3 d-inline-block rounded mb-0">A Team of Medical Professionals</h5>
                        <br />
                        <p className="slide-title-2 p-2 my-0 d-inline-block rounded">To Take Care of Your Health</p>
                        <br />
                        <p className="slide-short-description mt-0 mb-1 p-2 d-inline-block rounded">We stand ahead in quality and integrity</p>
                        <br />
                        <Link to="/services" className="btn-regular rounded-pill btn mt-0">View Services &nbsp; <i className="fas fa-plus"></i></Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="slide-caption">
                        <h5 className="slide-title p-3 d-inline-block rounded mb-0">A Team of Medical Professionals</h5>
                        <br />
                        <p className="slide-title-2 p-2 my-0 d-inline-block rounded">To Take Care of Your Health</p>
                        <br />
                        <p className="slide-short-description mt-0 mb-1 p-2 d-inline-block rounded">We stand ahead in quality and integrity</p>
                        <br />
                        <Link to="/services" className="btn-regular rounded-pill btn mt-0">View Services &nbsp; <i className="fas fa-plus"></i></Link>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;