import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Modal, Button } from 'rsuite';

export class SMTPSettingsForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            formValue: {
                name: '',
                email: '',
                password: '',
                textarea: ''
            },
            show: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    close() {
        this.setState({ show: false });
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
                        <Form
                            fluid
                            onChange={this.handleChange}
                            formValue={this.state.formValue}
                        >
                            <FormGroup>
                                <ControlLabel>Host</ControlLabel>
                                <FormControl name="host" />
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Port</ControlLabel>
                                <FormControl name="port"/>
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Username</ControlLabel>
                                <FormControl name="username"/>
                                <HelpBlock>Required</HelpBlock>
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl name="password"/>
                                <HelpBlock>Required</HelpBlock>
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
