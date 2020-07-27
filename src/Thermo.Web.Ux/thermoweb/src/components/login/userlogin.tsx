import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button } from 'rsuite';

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
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    close() {
        this.setState({ show: false });
        this.props.addUser(this.state.formValue);

    }
    open() {
        this.setState({ show: true });
    }
    handleChange(value: any) {
        this.setState({
            formValue: value
        });
    }
    render() {
        return (
            <div>

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
                            <Button appearance="primary">Submit</Button>
                            <Button appearance="default">Cancel</Button>
                        </ButtonToolbar>
                    </FormGroup>Î

                </Form>

            </div>
        );
    }
}
