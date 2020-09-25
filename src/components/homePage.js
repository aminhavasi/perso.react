import React from 'react';
import Navabr from './common/navbar';
import './../css/main.css';
import Jumbotron from './homePage/jumbotron';
import Footer from './common/footer';
import Description from './homePage/description';
import Posts from './homePage/posts';

const HomePage = () => {
    return (
        <div
            style={{
                backgroundColor: 'black',
            }}
        >
            <Navabr />
            <Jumbotron />
            <Description />

            <Posts />
            <Footer />
        </div>
    );
};

export default HomePage;
