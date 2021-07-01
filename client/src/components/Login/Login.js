import React, { Component } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import { login } from "../../actions/auth";


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: '',
      password: '',
      errors: [],
      loading: false,
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

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      loading: true,
    })

    var errors = []

    if (this.state.username === '') {
      errors.push('username')
    }

    if (this.state.password === '') {
      errors.push('password')
    }

    this.setState({
      errors: errors
    })

    const { dispatch, history } = this.props

    if (errors.length > 0) {
      this.setState({
        loading: false
      })
      return false
    }
    else {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          history.push("/profile");
          window.location.reload();
        })
      .catch(() => {
        this.setState({
          loading: false
        })
      })
    }
  }

  render() {

    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
    <Form onSubmit={this.handleSubmit} ref={(c) => {this.form = c;}}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username"  name="username" value={this.state.username} onChange={this.onChangeUsername}/>
      </Form.Group>
      <Alert variant="danger" className={(this.state.errors.includes('username')) ? 'visible' : 'd-none'}>No username entered</Alert>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" value={this.state.password} onChange={this.onChangePassword}/>
      </Form.Group>
      <Alert variant="danger" className={(this.state.errors.includes('password')) ? 'visible' : 'd-none'}>No password entered</Alert>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {message && (
        <Alert variant="danger">{message}</Alert>
      )}
    </Form>
    )
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);

