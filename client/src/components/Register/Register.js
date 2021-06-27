import React, { Component } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import AuthService from "../../services/auth.service"

export default class Register extends Component {
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
      errors: []
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
    var errors =[]

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
      console.log(errors)
      return false
    }
    else {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(()=> {
        this.props.history.push('');
        window.location.reload();
      })
      console.log("Success")
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
      </Form>
    )
  }
}