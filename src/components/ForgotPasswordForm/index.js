import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';

class ForgotPasswordForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: ""
    }
  }
  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h3 className="form-forgotpassword-heading">Forgot Password</h3>
        <FormControl
          type="text"
          placeholder="Email"
          value={this.state.email}
          required={true}
          onChange={e => this.setState({email: e.target.value})}
        />

        <Button
          bsStyle="warning"
          className="btn btn-orange"
          type="submit">
          Reset Password <i className="fa fa-angle-double-right"></i>
        </Button>
      </form>
    )
  }
}

export default ForgotPasswordForm;
