import React, { useEffect, useState } from 'react';
import { getCookie } from './../../utils/cookie';

import { langu } from './../../utils/languages';
const Posts = () => {
    const [load, setLoad] = useState(false);
    const [language, setLanguage] = useState({});
    useEffect(() => {
        let cookieName = getCookie();
        let lang = langu(cookieName);
        setLanguage(lang);
        setLoad(true);
    }, [load]);
    return load === true ? (
        <div style={{ backgroundColor: '#0e0e0f' }} className="container-fluid">
            <hr
                style={{
                    backgroundColor: 'silver',

                    margin: 0,
                }}
            />
            <h1 className="text-center text-white mt-5 ">
                {language.linksmain.title}
            </h1>
            <div className="mt-5 text-center text-white row mx-1">
                <div
                    className=" col-12 col-lg-4 col-md-6 col-xs-12 col-sm-12 shadow mb-3"
                    style={{ wordBreak: 'break-all' }}
                >
                    <img
                        src={require('./../../resource/image/documents.webp')}
                        style={{ width: '100%' }}
                        className="image-fluid my-1"
                        alt="img-*"
                    />
                    <p> {language.linksmain.resume_title}</p>
                    <hr style={{ backgroundColor: 'silver' }} />
                    <p>{language.linksmain.resume_body}</p>
                    <button className="btn btn-block bg-primary text-white">
                        {language.linksmain.resume_button}
                    </button>
                </div>
                <div
                    className=" col-12 col-lg-4 col-md-6 col-xs-12 col-sm-12 shadow mb-3"
                    style={{ wordBreak: 'break-all' }}
                >
                    <img
                        src={require('./../../resource/image/js.jpg')}
                        style={{ width: '100%' }}
                        className="image-fluid my-1"
                        alt="img-*"
                    />
                    <p>{language.linksmain.projects_title}</p>
                    <hr style={{ backgroundColor: 'silver' }} />
                    <p>{language.linksmain.projects_body}</p>
                    <button className="btn btn-block bg-success text-white">
                        {language.linksmain.projects_button}
                    </button>
                </div>
                <div
                    className=" col-12 col-lg-4 col-md-6 col-xs-12 col-sm-12 shadow mb-3"
                    style={{ wordBreak: 'break-all' }}
                >
                    <img
                        src={require('./../../resource/image/type.jpg')}
                        style={{ width: '100%' }}
                        className="image-fluid my-1"
                        alt="img-*"
                    />
                    <p>{language.linksmain.post_title}</p>
                    <hr style={{ backgroundColor: 'silver' }} />
                    <p>{language.linksmain.post_body}</p>
                    <button className="btn btn-block bg-danger text-white">
                        {language.linksmain.post_button}
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default Posts;
