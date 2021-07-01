import React, { Component } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
// import AuthService from "../../services/auth.service"

import { connect } from "react-redux";
import { register } from "../../actions/auth";


class Register extends Component {
  constructor(props) {
    super(props)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: [],
      successful: false,
    }
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  onChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var errors = []
    this.setState({
      successful: false,
    })

    if (this.state.username === '') {
      errors.push('username')
    }

    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(this.state.email).toLowerCase());

    if (!validEmail) {
      errors.push('email')
    }

    if (this.state.password === '') {
      errors.push('password')
    }

    this.setState({
      errors: errors
    });

    if (errors.length > 0) {
      // console.log(errors)
      return false
    }
    else {
      this.props
      .dispatch(
        register(this.state.username, this.state.email, this.state.password)
      )
      .then(() => {
        this.setState({
          successful: true,
        });
      })
      .catch(() => {
        this.setState({
          successful: false,

        });
      });
    }
  }


  

  render() {
    const { message } = this.props
    return (
      <div class="container">
        <h2>Create account</h2>
        <Form onSubmit={this.handleSubmit} ref={(c) => {this.form = c;}}>
          {!this.state.successful && (
            <div>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="username" 
            placeholder="Enter username" 
            name="username" 
            value={this.state.username} 
            onChange={this.onChangeUsername}
            />
          </Form.Group>
          <Alert variant="danger" className={(this.state.errors.includes('username')) ? 'visible' : 'd-none'}>Invalid username entered</Alert>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            />
          </Form.Group>
          <Alert variant="danger" className={(this.state.errors.includes('email')) ? 'visible' : 'd-none'}>Invalid email entered</Alert>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            name="password" 
            value={this.state.password} 
            onChange={this.onChangePassword}
            />
          </Form.Group>
          <Alert variant="danger" className={(this.state.errors.includes('password')) ? 'visible' : 'd-none'}>Invalid password entered</Alert>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </div>
          )}

          {message && (
            <div>
              <Alert variant="danger">{message}</Alert>

            </div>
          )}
        </Form>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const {message} = state.message
  return {
    message,
  }
}

export default connect(mapStateToProps)(Register)





