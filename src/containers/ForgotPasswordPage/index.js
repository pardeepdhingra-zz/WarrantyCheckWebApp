import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import DocumentTitle from 'react-document-title';
import ForgotPasswordForm from '../../components/ForgotPasswordForm'
import LoginLink from '../../components/LoginLink'
import './forgotpassword.css'

class ForgotPasswordPage extends Component {
  render() {
    return (
      <DocumentTitle title={`ForgotPassword`}>
        <div className="container">
          <Row>
            <Col xs={12} sm={4} smOffset={4}>
              <ForgotPasswordForm />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} smOffset={4}>
              <span className="pull-right">
                <LoginLink />
              </span>
            </Col>
          </Row>
        </div>
      </DocumentTitle>
    );
  }
}

export default ForgotPasswordPage
