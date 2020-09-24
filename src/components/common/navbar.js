import React, { useEffect, useState } from 'react';
import './navbar.css';
import persian from './../../i18n/persian.json';
import english from './../../i18n/english.json';
import Cookie from 'universal-cookie';
const cookie = new Cookie();

const Navabr = () => {
    const [load, setLoad] = useState(false);
    const [language, setLanguage] = useState({});

    const changeLang = () => {
        if (cookie.get('lan') === 'fa') {
            cookie.set('lan', 'en', {
                path: '/',
                expires: new Date(Date.now() + 31556952000),
                sameSite: 'none',
                secure: true,
            });
        } else {
            cookie.set('lan', 'fa', {
                path: '/',
                expires: new Date(Date.now() + 31556952000),
                sameSite: 'none',
                secure: true,
            });
        }
        window.location.reload();
    };
    useEffect(() => {
        if (!cookie.get('lan')) {
            cookie.set('lan', 'fa', {
                path: '/',
                expires: new Date(Date.now() + 31556952000),
            });
        }
        let lang = cookie.get('lan');
        if (lang === 'fa') {
            setLanguage(persian);
        } else {
            setLanguage(english);
        }
        setLoad(true);
    }, [load]);
    return (
        <React.Fragment>
            {load === true ? (
                <nav
                    lang={cookie.get('lan')}
                    className="navbar navbar-expand-sm navbar-dark navbar-cus"
                >
                    <a className="navbar-brand" href="/">
                        {language.navbar.title}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExample03"
                        aria-controls="navbarsExample03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarsExample03"
                    >
                        <ul className="navbar-nav ml-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link item" href="/">
                                    {language.navbar.about}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link item" href="/">
                                    {language.navbar.contact}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link item" href="/">
                                    {language.navbar.projects}
                                </a>
                            </li>
                            <li className="nav-item item">
                                <a className="nav-link" href="/">
                                    {language.navbar.resume}
                                </a>
                            </li>
                            <li className="nav-item item">
                                <a className="nav-link" href="/">
                                    {language.navbar.home}
                                </a>
                            </li>
                            <li className="nav-item item ">
                                <a
                                    className="nav-link"
                                    href="/"
                                    onClick={() => changeLang()}
                                >
                                    {language.navbar.lan}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            ) : null}
        </React.Fragment>
    );
};

export default Navabr;
