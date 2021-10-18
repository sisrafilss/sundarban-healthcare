import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page Not Found!</h2>
            <button>
                <Link to="/home">Go to Homepage</Link>
            </button>
        </div>
    );
};

export default NotFound;