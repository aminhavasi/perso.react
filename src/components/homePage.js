import React, { useEffect, useState } from 'react';
import Navabr from './common/navbar';
import './../css/main.css';

const HomePage = () => {
    const [d, s] = useState(1);
    useEffect(() => {
        console.log('ssssss');
    });
    return (
        <div>
            {console.log(d, '****')}
            <div className="main">
                <Navabr />
                <div className="container dec">
                    <span>
                        {' '}
                        Bo<span style={{ color: 'red' }}>r</span>n
                        <br />
                        To Be c<span style={{ color: 'red' }}>o</span>der
                    </span>
                </div>
            </div>
            <div
                style={{ backgroundColor: '#131742', color: 'white' }}
                className="text-center p-3"
            >
                <a className="lead">as</a>
            </div>
        </div>
    );
};

export default HomePage;
