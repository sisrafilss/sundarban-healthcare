import React from 'react';
import { useParams } from 'react-router';
import PageTopTitle from '../../PageTopTitle/PageTopTitle';
import servicesList from './serviceList';
import './ServiceDetail.css';
import Sidebar from '../../Sidebar/Sidebar';


const ServiceDetail = () => {

    /* 
    I would failed to load the data from services.json after trying several time. I spent about 3 hours only for solving this problem. But always I got an emplty array. That's why I am using this system to load my data. I'll definitly try to solve this problem after finishing my assingment. 
    */
    const services = servicesList;

    const { serviceId } = useParams();
    // Finding the targated object chose by user on click.
    const targetedData = services.find(service => service.id === serviceId);
    const { title, thumbnail, description } = targetedData;

    // Props object for PageTopTitle component.
    const pageTopTitle = {
        title: title,
        subtitle: description.slice(0, 52) + '...'
    }


    return (
        <div>
            <PageTopTitle pageTopTitle={pageTopTitle} />
            <div className="container" >
                <div className="row">
                    <div className="col-md-8 mt-5">
                        <div className="my-5 me-5">
                            <div className="card">
                                <img src={thumbnail} className="card-img img-fluid" alt="" />
                            </div>
                            <div className="my-4">
                                <p className="card-description"> {description} </p>
                                <p className="card-description"> {description} </p>
                                <p className="card-description"> {description} </p>
                                <p className="card-description"> {description} </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="mt-5">
                            <button className="btn btn-regular btn-appointment"> <i className="fas fa-calendar-check"></i> &nbsp;  Request An Appointment</button>
                        </div>
                        <div className="mt-5">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;