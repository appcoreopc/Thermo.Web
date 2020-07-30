
import React from 'react';
import { Table, } from 'rsuite';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const ConfigureComponent = () => (

    <div className="fullscreenlayout">

        <div className="rs-nav rs-nav-default rs-navbar-nav rs-nav-horizontal">
            <ul><li className="rs-nav-item">
                <a role="button" className="rs-nav-item-content"><i className="rs-icon rs-icon-home"></i>
                    <Link to="/setupuser">Users</Link>
                    <span className="rs-ripple-pond"><span className="rs-ripple"></span></span></a></li>
                <li className="rs-nav-item">
                    <a role="button" className="rs-nav-item-content"><i className="rs-icon rs-icon-home"></i>
                        <Link to="/smtp">Configure SMTP</Link>
                        <span className="rs-ripple-pond"><span className="rs-ripple"></span></span></a>
                </li></ul></div>

                <div className="fullscreenlayout">
                    
                </div>
                
    </div>

);