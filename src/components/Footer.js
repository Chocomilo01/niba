import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import the CSS file if needed

const Footer = () => {
  return (
    <footer className="afooter">
      <Container>
        <Row>
          <Col className="left-center">
            <p>&copy; {new Date().getFullYear()} Niba. All rights reserved.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="resources-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="/api-resources">API Resources</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/faq">Frequently Asked Questions</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
