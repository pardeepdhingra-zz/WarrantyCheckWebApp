import React from 'react';
import { Row, Col } from 'react-bootstrap'
import DocumentTitle from 'react-document-title';
import RegisterLink from '../../components/RegisterLink'
import LoginForm from '../../components/LoginForm'
import ForgotPasswordLink from '../../components/ForgotPasswordLink'
import './login.css'

export default class LoginPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <Row>
            <Col xs={12} sm={4} smOffset={4}>
              <LoginForm />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} smOffset={4}>
              <span><RegisterLink /></span>
              <span className="pull-right">
                <ForgotPasswordLink />
              </span>
            </Col>
          </Row>
        </div>
      </DocumentTitle>
    );
  }
}
