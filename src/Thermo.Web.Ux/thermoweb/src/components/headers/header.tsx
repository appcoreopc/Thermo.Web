import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Nav, Dropdown } from 'rsuite';
import { SecuredRoute } from '../secureRoute/securedRoute';
import { LoginComponent } from '../../components/login/logincomponent';
import { SetupSmtp } from '../smtp/setupsmtp';
import { SetupUser } from '../users/setupuser';

export const Header = () => (
    <div>
        <Router>
            <Nav>
                <Nav.Item> <Link to="/">Home</Link> </Nav.Item>
                <Nav.Item> <Link to="/setupuser">Users</Link> </Nav.Item>
                <Nav.Item> <Link to="/smtp">Configure SMTP</Link> </Nav.Item>
            </Nav>
            <div>
                <Switch>
                    <Route exact path="/">
                    </Route>
                    
                    <Route path="/setupuser">
                        <SetupUser />
                    </Route>

                    <Route path="/smtp">
                        <SetupSmtp />
                    </Route>

                    <SecuredRoute path="/securedzoned">
                        <LoginComponent />
                    </SecuredRoute>
                </Switch>
            </div>
        </Router>
    </div>
);


