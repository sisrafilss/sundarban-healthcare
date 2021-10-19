import React from 'react';
import './PageTopTitle.css'

const PageTopTitle = ({ pageTopTitle }) => {

    const { title, subtitle } = pageTopTitle;

    return (
        <div style={{ position: 'relative' }}>
            <div className="page-top-title bg_transparent container-fluid py-5">
                <div className="container">
                    <div className="title">
                        <h1 className="text-light fw-bold"> {title} </h1>
                        <p style={{fontWeight: '400'}} className="text-light lead"> {subtitle} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default PageTopTitle;