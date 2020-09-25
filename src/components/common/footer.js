import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer className="bg-light">
                <div className="container py-3 py-sm-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>Links</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://qom-iau.ac.ir/">
                                        my University
                                    </a>
                                </li>
                                <li>
                                    <a href="https://toplearn.com/">
                                        Top learn
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href="https://www.ict.gov.ir/">ict</a>
                                </li>{' '}
                                <li>
                                    <a href="https://www.cyberpolice.ir/">
                                        cyberPolis
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href="http://www.sadeghimoein.ir/">
                                        sadeghimoein
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>informations</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">About me</a>
                                </li>
                                <li>
                                    <a href="/">projects</a>
                                </li>{' '}
                                <li>
                                    <a href="/">resume</a>
                                </li>{' '}
                                <li>
                                    <a href="/">my posts</a>
                                </li>{' '}
                                <li>
                                    <a href="https://parswebserver.com/">
                                        host
                                    </a>
                                </li>
                            </ul>
                        </div>{' '}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>Follow me</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://twitter.com/pau_ahq">
                                        <i className="fa fa-twitter"></i>Twitter
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href="https://github.com/aminhavasi">
                                        <i className="fa fa-github"></i>Github
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href="https://www.instagram.com/amin_havasi_pau">
                                        <i className="fa fa-instagram"></i>
                                        Instagram
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href="https://youtube.com">
                                        <i className="fa fa-youtube"></i>Youtube
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href="https://www.linkedin.com/in/amin-havasi-6b4885172">
                                        <i className="fa fa-linkedin">
                                            Linkedin
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>My contact</h3>
                            <address>
                                <strong>Amin havasi</strong>

                                <br />
                                <i className="fa fa-phone " aria-hidden="true">
                                    {' '}
                                </i>
                                <span className="sr-only">Telephone:</span>
                                <span>(98)9100788926</span>
                                <br />
                                <i className="fa fa-phone " aria-hidden="true">
                                    {' '}
                                </i>
                                <span className="sr-only">Telephone:</span>
                                <span>(98)9014289738</span>
                                <br />
                                <i className="fa fa-inbox " aria-hidden="true">
                                    {' '}
                                </i>
                                <span className="sr-only">Mail:</span>
                                <span>pau.ahq@gmail.com</span>
                                <br />
                            </address>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
