import React from 'react';
import SargeryParts from '../SargeryPage/SargeryParts/SargeryParts';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SargeryParts></SargeryParts>
        </div>
    );
};

export default Home;