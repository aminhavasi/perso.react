import React from 'react';
const Posts = () => {
    return (
        <div style={{ backgroundColor: '#0e0e0f' }} className="container-fluid">
            <hr
                style={{
                    backgroundColor: 'silver',

                    margin: 0,
                }}
            />
            <h1 className="text-center text-white mt-5 ">
                see more on my site
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
                    />
                    <p>resume</p>
                    <hr style={{ backgroundColor: 'silver' }} />
                    <p>ddddddddddddddddddddddddddd</p>
                    <button className="btn btn-block bg-primary text-white">
                        see
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
                    />
                    <p>projects</p>
                    <hr style={{ backgroundColor: 'silver' }} />
                    <p>ssssssssssssssssssssssssss</p>
                    <button className="btn btn-block bg-success text-white">
                        ss
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
                    />
                    <p>posts</p>
                    <hr style={{ backgroundColor: 'silver' }} />
                    <p>ssssssssssssssssssssssssss</p>
                    <button className="btn btn-block bg-warning text-white">
                        ss
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Posts;
