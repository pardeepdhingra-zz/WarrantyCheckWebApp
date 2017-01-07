import React, { Component } from 'react'
import { FormControl, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import cookie from 'react-cookie'
import { login } from '../../graphql/services'
import './login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "test@tester.com",
      password: "12345678"
    }
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(event) {
    event.preventDefault();
    let {email, password} = this.state;
    login(email, password)
      .then(token => {
        cookie.save('token', token, { path: '/' });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <Col md={4} mdOffset={4} className="login-form">
        <form onSubmit={this.handleSubmit}>
          <h3 className="form-signin-heading">Login</h3>
          <FormControl
            type="text"
            placeholder="Email/Phone"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}
          />

          <FormControl
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
          />

          <Button
            bsStyle="warning"
            className="btn btn-orange"
            type="submit">
            Login <i className="fa fa-angle-double-right"></i>
          </Button>
        </form>
        <span className="form-links">
          Don't have Account? <Link to="/registration">Create Account?</Link>
        </span>
      </Col>
    )
  }
}

export default Login
