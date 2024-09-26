import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="afooter">
      <Container fluid>
        <Row className="justify-content-center py-4">
  <Col md={3} className="text-center">
    <h5>Niba</h5>
    <p>&copy; {new Date().getFullYear()} Niba. All rights reserved.</p>
  </Col>

  <Col md={3} className="text-center resources-section">
    <h5>Resources</h5>
    <ul>
      <li><a href="/api-resources">API Resources</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/faq">FAQ</a></li>
    </ul>
  </Col>

  <Col md={3} className="text-center contact-section">
    <h5>Contact Us</h5>
    <ul>
      <li><a href="/contact">Contact Form</a></li>
      <li><a href="mailto:support@niba.com">support@niba.com</a></li>
      <li><a href="tel:+123456789">+1 (234) 567-89</a></li>
    </ul>
  </Col>
</Row>


        <Row className="justify-content-center py-3">
          <Col md={6} className="social-media">
            <h5>Follow Us</h5>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
