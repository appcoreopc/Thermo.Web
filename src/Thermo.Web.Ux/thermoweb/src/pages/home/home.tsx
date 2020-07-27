import React from 'react';
import { Header } from '../../components/headers/header';
import { Footer } from '../../components/footers/footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Icon } from 'rsuite';
import { Nav } from 'rsuite';
import { SecuredRoute } from '../../components/secureRoute/securedRoute';
import { LoginComponent } from '../../components/login/logincomponent';
import { SetupSmtp } from '../../components/smtp/setupsmtp';
import { SetupUser } from '../../components/users/setupuser';
import { UserLogin } from '../../components/login/userlogin';

export const Home = () => (
  <div>
    <Header></Header>
    <Router>
      <Nav>
        <Nav.Item icon={<Icon icon="home" />}> <Link to="/">Home</Link> </Nav.Item>
        <Nav.Item icon={<Icon icon="user" />}> <Link to="/setupuser">Users</Link> </Nav.Item>
        <Nav.Item icon={<Icon icon="envelope" />}> <Link to="/smtp">Configure SMTP</Link> </Nav.Item>


      </Nav>

      <div>


        <Switch>

          <Route path="/smtp">
            <SetupSmtp />
          </Route>

          <Route path="/setupuser">
            <SetupUser />
          </Route>
          {/* 
          <Route path="/">
            <LoginComponent />
          </Route>

          <Route path="/login">
            <LoginComponent />
          </Route> */}

        </Switch>
      </div>
    </Router>

    <Footer companyinfo="demo" year="2020"></Footer>
  </div>
);


