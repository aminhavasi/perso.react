import React, { useEffect, useState } from 'react';
import './../../css/main.css';
import { getCookie } from './../../utils/cookie';
import { langu } from './../../utils/languages';
const Jumbotron = () => {
    const [language, setLanguage] = useState({});
    const [load, setLoad] = useState(false);
    useEffect(() => {
        let cookieName = getCookie();
        let lang = langu(cookieName);
        setLanguage(lang);
        setLoad(true);
    }, [load]);
    return (
        <React.Fragment>
            {load === true ? (
                <div
                    id="section-top"
                    className="jumbotron jumbotron-fluid text-white d-flex justify-content-center aligin-items-center "
                    style={{
                        paddingTop: '5rem',
                        paddingBottom: 0,
                        marginBottom: 0,
                    }}
                >
                    <div className="container text-center">
                        <h1 className="display-1 text-primary text-uppercase">
                            {language.jumbotron.title}
                        </h1>
                        <p className="lead p-2 ">{language.jumbotron.words}</p>
                        <p className="lead p-2">
                            {language.jumbotron.statement}
                        </p>
                        <p>
                            <strong>{language.jumbotron.social}</strong>
                        </p>
                        <a
                            href="https://instagram.com"
                            className="btn btn-lg btn-primary m-1"
                        >
                            <i className="fa fa-instagram">Instagram</i>
                        </a>
                        <a
                            href="https://twitter.com"
                            className="btn btn-lg btn-primary "
                        >
                            <i className="fa fa-twitter">twitter</i>
                        </a>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default Jumbotron;
