import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import DocumentTitle from 'react-document-title';
import RegistrationForm from '../../components/RegistrationForm'
import LoginLink from '../../components/LoginLink'
import './registration.css'

export default class RegistrationPage extends Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <Row>
            <Col xs={12} sm={4} smOffset={4}>
              <RegistrationForm />
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
