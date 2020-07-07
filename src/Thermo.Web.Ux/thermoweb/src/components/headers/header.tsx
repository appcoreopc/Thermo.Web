import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { SecuredRoute } from '../secureRoute/securedRoute';
import { LoginComponent } from '../../components/login/logincomponent';

export const Header = () => (
    <div>
        header section

        <Router>
            <div>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/securedzoned">Login</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                 </ul>
            </div>
            <div>
                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <SecuredRoute path="/securedzoned">
                        <LoginComponent />
                    </SecuredRoute>
                </Switch>
            </div>
        </Router>
    </div>
);


function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}
