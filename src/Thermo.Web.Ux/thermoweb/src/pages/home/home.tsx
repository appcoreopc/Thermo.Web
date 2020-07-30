
import React from 'react';
import SetupUser from '../../components/users/setupuser';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav } from 'rsuite';
import { SecuredRoute } from '../../components/secureRoute/securedRoute';
import { SetupSmtp } from '../../components/smtp/setupsmtp';
import { UserLogin } from '../../components/login/userlogin';
import { Container, Header, Navbar, Icon, Content } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { fakeAuth } from '../../components/login/fakeAuth';
import { Footer } from '../../components/footers/footer';
import { CompanyHome } from '../../components/companyinfo/companyhome';
import { ConfigureComponent } from '../../components/secureRoute/configurecomponent';


export const Home = () => (
  <div className="show-fake-browser navbar-page">
    <Router>
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
            </Navbar.Header>
            <Navbar.Body>
              <Nav>
                <Nav.Item icon={<Icon icon="home" />}><Link to="/">Home</Link></Nav.Item>
<Nav.Item><Link to="/protected"> Setup </Link></Nav.Item>
              </Nav>
            </Navbar.Body>
          </Navbar>
        </Header>
        <Content>
         
          <Switch>
            <Route exact path="/">
              <CompanyHome></CompanyHome>
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

              <ConfigureComponent></ConfigureComponent>
              
            </SecuredRoute>
          </Switch>

        </Content>

        <Footer companyinfo='Fatme' 
         year='2020'></Footer>
      </Container>
    </Router>

  </div>
);