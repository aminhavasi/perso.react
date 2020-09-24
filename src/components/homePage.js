import React from 'react';
import Navabr from './common/navbar';
import './../css/main.css';
import Jumbotron from './homePage/jumbotron';

const HomePage = () => {
    return (
        <div
            style={{
                backgroundColor: 'black',
            }}
        >
            <Navabr />
            <Jumbotron />
        </div>
    );
};

export default HomePage;
