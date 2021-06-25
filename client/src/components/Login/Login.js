import React, { Component } from "react";
import AuthService from "../../services/auth.service";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleLogin(event) {
    event.preventDefault();
    this.setState({
      message: "",
      loading: true
    });

    AuthService.login(this.state.username, this.state.password).then(
      () => {
        this.props.history.push('/user')
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );

  }

  render() {
    return (
    <Form onSubmit={this.handleLogin} ref={c => {this.form = c;}}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username"  name="username" value={this.state.username} onChange={this.onChangeUsername}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" value={this.state.password} onChange={this.onChangePassword}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
  }
}