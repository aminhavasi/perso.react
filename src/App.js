import React from 'react';
import HomePage from './components/homePage';
import Cookie from 'universal-cookie';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import NotFound from './components/common/notFound';
const cookie = new Cookie();

function App() {
    return (
        <div
            lang={cookie.get('lan') ? cookie.get('lan') : null}
            className="App "
        >
            <Switch>
                <Route path="/notfound" component={NotFound} />
                <Route exact path="/" component={HomePage} />
                <Redirect to="/notfound" />
            </Switch>
        </div>
    );
}

export default App;
