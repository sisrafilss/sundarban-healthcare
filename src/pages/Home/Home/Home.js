import React from 'react';
import GreetingUsers from '../GreetingUsers/GreetingUsers';
import HighlightedServices from '../HighlightedServices/HighlightedServices';
import LatestBlog from '../LatestBlog/LatestBlog';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <GreetingUsers />
            <HighlightedServices />
            <LatestBlog />
        </div>
    );
};

export default Home;