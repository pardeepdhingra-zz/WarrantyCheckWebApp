import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "test@tester.com",
      password: "12345678"
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let {email, password} = this.state;
    this.props.loginUser({email, password});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h3 className="form-signin-heading">Login</h3>
        <FormControl
          type="email"
          placeholder="Email"
          value={this.state.email}
          required={true}
          onChange={e => this.setState({email: e.target.value})}
        />

        <FormControl
          type="password"
          placeholder="Password"
          value={this.state.password}
          required={true}
          onChange={e => this.setState({password: e.target.value})}
        />

        <Button
          bsStyle="warning"
          className="btn btn-orange"
          type="submit">
          Login <i className="fa fa-angle-double-right"></i>
        </Button>
      </form>
    )
  }
}

export default LoginForm;
