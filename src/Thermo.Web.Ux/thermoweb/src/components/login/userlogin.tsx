import React, { useState, useEffect } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button } from 'rsuite';
import axios from 'axios';
import { AppConfiguration } from '../../config/config';
import { fakeAuth } from './fakeAuth';
import { useHistory } from "react-router"

export class UserLogin extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            formValue: {
                name: '',
                password: ''
            },
            show: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async handleLogin() {

        fakeAuth.authenticate();

        //  var result = await axios.post(
        //      AppConfiguration.host + AppConfiguration.loginUrl, 
        //      this.state.formValue.name);

    }

    handleChange(value: any) {
        this.setState({
            formValue: value
        });
    };

    render() {
        return (
            <div>

                <div className="center loginlayout">

                    <Form fluid onChange={this.handleChange}
                        formValue={this.state.formValue}>

                        <FormGroup>
                            <ControlLabel>Username</ControlLabel>
                            <FormControl name="name" />
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl name="password" type="password" />
                        </FormGroup>

                        <FormGroup>
                            <ButtonToolbar>
                                <Button onClick={() => { this.handleLogin() }} appearance="primary">Login</Button>
                            </ButtonToolbar></FormGroup>
                    </Form>

                </div>

            </div>
        );
    }
}
