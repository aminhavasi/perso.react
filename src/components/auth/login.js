import React from 'react';
import './auth.css';
const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <h2 className="text-center">Login form</h2>
                <form>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="pswd"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
