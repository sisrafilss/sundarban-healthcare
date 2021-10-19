import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <div className="container my-5">
                <div>
                    <img src={pageNotFound} className="img-fluid" alt="" />
                </div>
                <div className="mt-3">
                    <Link className="btn btn-info btn-lg" to="/home">Go to Homepage</Link>
                </div>
            </div>



        </div>
    );
};

export default NotFound;