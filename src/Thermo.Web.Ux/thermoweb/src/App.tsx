import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import StoreReducers from './redux/store'
import SetupUser from './components/users/setupuser';
import { Footer } from './components/footers/footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav } from 'rsuite';
import { SecuredRoute } from './components/secureRoute/securedRoute';
import { SetupSmtp } from './components/smtp/setupsmtp';
import { UserLogin } from './components/login/userlogin';

const App = () => (

  <Provider store={StoreReducers}>

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

              
              <Link to="/">Home</Link>
              <Link to="/setupuser">Users</Link>
              <Link to="/smtp">Configure SMTP</Link>
              <Link to="/protected">Login</Link>

            </SecuredRoute>
          </Switch>

        </div>
      </Router>

      <Footer companyinfo="FatMe" year="2020"></Footer>
    </div>

  </Provider>

);

export default App;
