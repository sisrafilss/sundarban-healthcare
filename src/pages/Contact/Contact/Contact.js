import React from 'react';
import PageTopTitle from '../../Shared/PageTopTitle/PageTopTitle';
import copmanylocation from '../../../images/map.jpg';
import './Contact.css'
import ContactForm from '../../Shared/Footer/ContactForm/ContactForm';

const Contact = () => {

    // Page top Title props
    const pageTopTitle = {
        title: 'Contact Us',
        subtitle: 'Feel free to contact us throug any of the follwing medium'
    }

    return (
        <div>
            <div>
                <PageTopTitle pageTopTitle={pageTopTitle} />
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <img src={copmanylocation} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="card" style={{ width: '18rem' }}>
                            
                            <div className="card-body d-flex">
                            <p className="my-0 pb-1">  39 UpHill Town, Newyork, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="card" style={{ width: '18rem' }}>
                           
                            <div className="card-body d-flex">
                             <p className="my-0 pb-1">+522 234 56789 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="card" style={{ width: '18rem' }}>
                           
                            <div className="card-body d-flex">
                             <p className="my-0 pb-1">info@sundarban-healthcare.org</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-5">
                <ContactForm />
            </div>

        </div>
    );
};

export default Contact;