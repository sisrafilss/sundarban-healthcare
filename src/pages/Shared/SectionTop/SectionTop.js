import React from 'react';
import './SectionTop.css'

const SectionTop = ({ sectionTop }) => {
    return (
        <div className="container-fluid mb-4 d-flex justify-content-center flex-column align-items-center">
            <h2> {sectionTop?.title} </h2>
            <p className="lead"> { sectionTop?.subtitle} </p>
        </div>
    );
};

export default SectionTop;