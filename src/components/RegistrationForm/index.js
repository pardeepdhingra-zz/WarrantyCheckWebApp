import React, { Component } from 'react'
import { FormControl, Button } from 'react-bootstrap'

class RegistrationForm extends Component {
  render() {
    return (
    	<form method="post">
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
          Register
        </Button>
			</form>
    )
  }
}

export default RegistrationForm
