import React from 'react';
import HomePage from './components/homePage';
import Cookie from 'universal-cookie';
import './App.css';
const cookie = new Cookie();

function App() {
    return (
        <div
            lang={cookie.get('lan') ? cookie.get('lan') : null}
            className="App "
        >
            <HomePage />
        </div>
    );
}

export default App;
