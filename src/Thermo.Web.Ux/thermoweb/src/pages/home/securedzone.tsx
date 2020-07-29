
import React from 'react';
import SetupUser from '../../components/users/setupuser';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav } from 'rsuite';
import { SecuredRoute } from '../../components/secureRoute/securedRoute';
import { SetupSmtp } from '../../components/smtp/setupsmtp';
import { UserLogin } from '../../components/login/userlogin';
import { Footer } from '../../components/footers/footer';

export const Home = () => (

    <div>

        <Router>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/protected">Login</Link>
            </Nav>

            <div>

                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/smtp">
                        <SetupSmtp />
                    </Route>

                    <Route path="/setupuser">
                        <SetupUser />
                    </Route>

                    <Route path="/login">
                        <UserLogin />
                    </Route>

                    <SecuredRoute path="/protected">

                        <Link to="/setupuser">Users</Link>
                        <Link to="/smtp">Configure SMTP</Link>
                     
                    </SecuredRoute>
                </Switch>

            </div>
        </Router>

        <Footer companyinfo="FatMe" year="2020"></Footer>
    </div>
);