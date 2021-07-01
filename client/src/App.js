import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import BoardUser from "./components/BoardUser/BoardUser";
import BoardModerator from "./components/BoardModerator/BoardModerator";
import BoardAdmin from "./components/BoardAdmin/BoardAdmin";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from './helpers/history';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand>App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {showModeratorBoard && (
                <Nav.Link as={Link} to='/mod'>Moderator</Nav.Link>
              )}
              {showAdminBoard && (
                <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
              )}
              {currentUser && (
                <Nav.Link as={Link} to='/user'>User</Nav.Link>
              )}
            </Nav>
            {currentUser ? (
              <Nav>
                <Nav.Link as={Link} to='/profile'>{currentUser.username}</Nav.Link>
                <Nav.Link as={Link} to="/login" onClick={this.logOut}>Log out</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={Link} to='/login'>Log in</Nav.Link>
                <Nav.Link as={Link} to="/register">Sign up</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
        <div>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);