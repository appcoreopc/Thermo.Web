import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Modal, Button } from 'rsuite';
import { AppConfiguration } from '../../config/config';

export class UserForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            formValue: {
                name: '',
                email: '',
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
                <Modal show={this.state.show} onHide={this.close} size="xs">
                    <Modal.Header>
                        <Modal.Title>New User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form fluid onChange={this.handleChange}
                            formValue={this.state.formValue}>

                            <FormGroup>
                                <ControlLabel>Username</ControlLabel>
                                <FormControl name="name" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl name="email" type="email" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl name="password" type="password" />
                            </FormGroup>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close} appearance="primary">
                            Confirm
              </Button>
                        <Button onClick={this.close} appearance="subtle">
                            Cancel
              </Button>
                    </Modal.Footer>
                </Modal>
                <Button onClick={this.open}>New User</Button>
            </div>
        );
    }
}
