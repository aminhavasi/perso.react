import React from 'react';
import './navbar.css';
const Navabr = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark navbar-cus">
            <a class="navbar-brand" href="#">
                Amin Havasi
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
                            about us
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link item" href="#">
                            contact us
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link item" href="#">
                            projects
                        </a>
                    </li>
                    <li class="nav-item item">
                        <a class="nav-link" href="#">
                            resume
                        </a>
                    </li>
                    <li class="nav-item item">
                        <a class="nav-link" href="#">
                            home
                        </a>
                    </li>
                    <li class="nav-item item">
                        <a class="nav-link" href="#">
                            فارسی
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navabr;
