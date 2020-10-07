import React, { useState, useEffect } from 'react';
import { getCookie } from '../../utils/cookie';
import { langu } from '../../utils/languages';
import './auth.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [language, setLanguage] = useState({});
    const [load, setLoad] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
    };
    useEffect(() => {
        let cookieName = getCookie();
        let lang = langu(cookieName);
        setLanguage(lang);
        setLoad(true);
    }, [load]);
    return (
        <React.Fragment>
            {load === true ? (
                <div className="login">
                    <div className="container">
                        <h2 className="text-center">{language.login.title}</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="email">
                                    {language.login.email}:
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">
                                    {language.login.password}:
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="pwd"
                                    placeholder="Enter password"
                                    name="pswd"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block "
                            >
                                {language.login.submit}
                            </button>
                        </form>
                        <div className="mt-4">
                            <a className="forgetPassword text-dark" href="/">
                                forget password?
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default Login;
