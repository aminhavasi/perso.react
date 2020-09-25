import React, { useEffect, useState } from 'react';
import { langu } from './../../utils/languages';
import { getCookie } from '../../utils/cookie';

const Description = () => {
    const [load, setLoad] = useState(false);
    const [language, setLanguage] = useState({});
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
                    style={{ backgroundColor: '#0e0e0f', color: 'white' }}
                    className="container-fluid text-center py-4 lead"
                >
                    <h3>{language.description.title}</h3>
                    <p>{language.description.desc}</p>
                    <strong style={{ fontStyle: 'italic' }}>
                        {' '}
                        &ldquo;{language.description.statement}&rdquo;
                    </strong>
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default Description;
