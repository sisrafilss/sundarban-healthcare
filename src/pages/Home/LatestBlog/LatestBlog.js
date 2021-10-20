import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import SectionTop from '../../Shared/SectionTop/SectionTop';
import SingleService from '../../Shared/SingleService/SingleService';
import SingleBlog from '../SingleBlog/SingleBlog';

const LatestBlog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    })

    // Section Top props object
    const sectionTop = {
        title: 'Latest Health & Medical News',
        subtitle: 'Cehckout our latest blog for medical news and health trick'
    }

    return (
        <div style={{marginTop: '70px'}}>
            <div className="container">
                <SectionTop sectionTop={sectionTop} />
            </div>
            <div className="mb-5">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            blogs.map(blog => <SingleBlog
                                key={blog.id}
                                blog={blog}
                            />)
                        }


                    </Row>
                    {/* This Button is Static */}
                    <div className="mt-5 d-grid">
                        <Link className="btn btn-load-more" to="#">Load More</Link>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default LatestBlog;