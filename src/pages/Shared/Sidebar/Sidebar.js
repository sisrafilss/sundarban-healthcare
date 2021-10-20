import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div>
            <h3 className="text-first my-3 fw-bold">Looking for Another Service?</h3>
            <div className="list-group">
                {/* This list link is disabled for now. */}
                <Link to="#" className="list-group-item list-group-item-action">Diagnose & Research</Link>
                <Link to="#" className="list-group-item list-group-item-action">Cancer Oncology</Link>
                <Link to="#" className="list-group-item list-group-item-action">Dental Surgery</Link>
                <Link to="#" className="list-group-item list-group-item-action">Neurology</Link>
                <Link to="#" className="list-group-item list-group-item-action">Drug / Medicine</Link>
                <Link to="#" className="list-group-item list-group-item-action">Heart Center</Link>
                <Link to="#" className="list-group-item list-group-item-action">Medical Counseling</Link>
                <Link to="#" className="list-group-item list-group-item-action">Pregnancy & Births</Link>
                <Link to="#" className="list-group-item list-group-item-action">Endocrinology</Link>
            </div>
        </div>
    );
};

export default Sidebar;