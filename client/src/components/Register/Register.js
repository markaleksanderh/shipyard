import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import AuthService from "../../services/auth.service";
import Alert from 'react-bootstrap/Alert'



export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: []
    }
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      console.log('Submit form')
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


// export default class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.handleRegister = this.handleRegister.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//       successful: false,
//       message: ""
//     };
//   }

  // onChangeUsername(event) {
  //   this.setState({
  //     username: event.target.value
  //   });
  // }

  // onChangeEmail(event) {
  //   this.setState({
  //     email: event.target.value
  //   });
  // }

  // onChangePassword(event) {
  //   this.setState({
  //     password: event.target.value
  //   });
  // }

//   handleRegister(event) {
//     event.preventDefault();

//     this.setState({
//       message: "",
//       successful: false
//     });


//     AuthService.register(
//       this.state.username,
//       this.state.email,
//       this.state.password
//     ).then( res => {
//       this.setState({
//         message: res.data.message,
//         successful: true
//       })
//     },
//     err => {
//       this.setState({
//         successful: false,
//         message: err.toString()
//       })
//     }
//     )
//   }

//   render() {
//     return (
//           <Form onSubmit={this.handleRegister} ref={c => {this.form = c;}}>
//             {!this.state.successful && (
//               <div>
                // <Form.Group controlId="formBasicUsername">
                //   <Form.Label>Username</Form.Label>
                //   <Form.Control 
                //   type="username" 
                //   placeholder="Enter username" 
                //   name="username" 
                //   value={this.state.username} 
                //   onChange={this.onChangeUsername}
                //   validations={[required, vusername]}
                //   />
                // </Form.Group>
                // <Form.Group controlId="formBasicEmail">
                //   <Form.Label>Email address</Form.Label>
                //   <Form.Control
                //   type="email"
                //   placeholder="Enter email"
                //   name="email"
                //   value={this.state.email}
                //   onChange={this.onChangeEmail}
                //   validations={[required, email]}
                //   />
                // </Form.Group>
                // <Form.Group controlId="formBasicPassword">
                //   <Form.Label>Password</Form.Label>
                //   <Form.Control 
                //   type="password" 
                //   placeholder="Password" 
                //   name="password" 
                //   value={this.state.password} 
                //   onChange={this.onChangePassword}
                //   validations={[required, vpassword]}
                //   />
                // </Form.Group>
                // <Button variant="primary" type="submit">
                //   Submit
                // </Button>
//               </div>
//             )}
//             {this.state.message && 
//               (
//                 this.state.successful ? <Alert variant='success'>this.state.message</Alert> : <Alert variant='danger'>this.state.message</Alert>
//               )
//             }
//             {/* <VCheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c; }} /> */}
//           </Form>
//     );
//   }
// }


