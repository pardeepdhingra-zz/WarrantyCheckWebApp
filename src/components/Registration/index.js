import React, { Component } from 'react'
import { FormControl, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { register } from '../../graphql/services'
import './registration.css'

class Registration extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(event) {
    event.preventDefault();
    let { email, password, confirm_password } = this.state;
    if(password === confirm_password){
      register(email, password)
        .then(user => {
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        });
    } else {
      console.log("password not matching");
    }
  }

  render() {
    return (
        <Col md={4} mdOffset={4} className="registration-form">
  				<form method="post" onSubmit={this.handleSubmit}>
            <h5 className="form-registration-heading">Registration</h5>
            <FormControl
              type="text"
              placeholder="Email/Phone"
              onChange={e => this.setState({email: e.target.value})}
            />

            <FormControl
              type="password"
              placeholder="Password"
              onChange={e => this.setState({password: e.target.value})}
            />

            <FormControl
              type="password"
              placeholder="Confirm Password"
              onChange={e => this.setState({confirm_password: e.target.value})}
            />

            <Button
              bsStyle="warning"
              className="btn btn-orange"
              type="submit">
              Register <i className="fa fa-angle-double-right"></i>
            </Button>
  				</form>
          <span className="form-links">Already have account? <Link to="login">Login</Link></span>
        </Col>
    );
  }
}

export default Registration
