import React, { useEffect, useState } from 'react';
import { getCookie } from './../../utils/cookie';
import { langu } from '../../utils/languages';
import { Link } from 'react-router-dom';
const NotFound = () => {
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
                    className="text-white"
                    style={{
                        minHeight: '100vh',
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <h2 className="display-4">{language.notfound.ops}</h2>
                    <div className="w-50 ">
                        <hr
                            style={{
                                backgroundColor: 'silver',
                                borderWidth: '1px',
                                width: '100%',
                            }}
                        />
                    </div>
                    <p style={{ fontSize: '30px' }}>{language.notfound.text}</p>
                    <Link
                        to="/"
                        className="bg-primary btn btn-sm text-white"
                        style={{ fontSize: '20px' }}
                    >
                        {language.notfound.button}
                    </Link>
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default NotFound;
