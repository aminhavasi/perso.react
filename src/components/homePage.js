import React from 'react';
import Navabr from './common/navbar';
import './../css/main.css';
const HomePage = () => {
    return (
        <div className="main">
            <Navabr />
            <div className="container dec">
                <span>
                    {' '}
                    Bo<span style={{ color: 'red' }}>r</span>n
                    <br />
                    To Be creative
                </span>
            </div>
        </div>
    );
};

export default HomePage;
