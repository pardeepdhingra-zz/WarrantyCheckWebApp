import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Copyright from '../Copyright'

import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Col sm={4}>
          198  West 21th Street, Suite 721<br />
          New York NY 10010<br />
          Email: <a href="mailto:support@rorfactory.com">support@rorfactory.com</a><br />
          Phone: +88 (0) 101 0000 000<br />
        </Col>
        <Col sm={4}>
        </Col>
        <Col sm={4}>
        </Col>
        <Copyright />
      </footer>
    );
  }
}

export default Footer
