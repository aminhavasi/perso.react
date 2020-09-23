import React, { useEffect, useState } from 'react';
import './navbar.css';
import persian from './../../i18n/persian.json';
import english from './../../i18n/english.json';
import Cookie from 'universal-cookie';
const cookie = new Cookie();

const Navabr = () => {
    const [load, setLoad] = useState(false);
    const [language, setLanguage] = useState({});
    const [lan, setLan] = useState('fa');
    const changeLang = () => {
        if (cookie.get('lan') === 'fa') {
            cookie.set('lan', 'en', {
                path: '/',
                expires: new Date(Date.now() + 31556952000),
            });
        } else {
            cookie.set('lan', 'fa', {
                path: '/',
                expires: new Date(Date.now() + 31556952000),
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
        console.log(english);
        if (lang === 'fa') {
            setLanguage(persian);
        } else {
            setLanguage(english);
        }
        setLoad(true);
    });
    return (
        <React.Fragment>
            {load === true ? (
                <nav
                    lang={cookie.get('lan')}
                    class="navbar navbar-expand-sm navbar-dark navbar-cus"
                >
                    <a class="navbar-brand" href="#">
                        {language.navbar.title}
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExample03"
                        aria-controls="navbarsExample03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample03">
                        <ul class="navbar-nav ml-auto text-center">
                            <li class="nav-item">
                                <a class="nav-link item" href="#">
                                    {language.navbar.about}
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link item" href="#">
                                    {language.navbar.contact}
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link item" href="#">
                                    {language.navbar.projects}
                                </a>
                            </li>
                            <li class="nav-item item">
                                <a class="nav-link" href="#">
                                    {language.navbar.resume}
                                </a>
                            </li>
                            <li class="nav-item item">
                                <a class="nav-link" href="#">
                                    {language.navbar.home}
                                </a>
                            </li>
                            <li class="nav-item item ">
                                <a
                                    class="nav-link"
                                    href="#"
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
