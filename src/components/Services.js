import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <Container>
      <Row className="text-center my-5">
        <Col>
          <h2>Our Services</h2>
          <p>Explore the services we offer to simplify your financial transactions.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Money Transfer</Card.Title>
              <Card.Text>
              Fast, secure,
               and reliable—our money transfer service allows you
                to send funds across borders with ease. Whether it’s for personal needs,
                 business transactions, or supporting loved ones,
                  Nidia ensures that your money reaches its destination quickly and safely.
               Experience peace of mind with our
               state-of-the-art security measures and real-time tracking.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Currency Conversion</Card.Title>
              <Card.Text>
              Get more value for your money with our competitive currency conversion rates.
               At Nidia, we offer seamless currency exchange services that make converting
                your funds easy and hassle-free. Our transparent process ensures that you
                 know exactly what you’re getting, with no hidden fees—just straightforward,
                  cost-effective conversions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Payment Solutions</Card.Title>
              <Card.Text>
              Whether you’re a business looking for efficient ways to manage transactions
               or an individual needing a flexible payment method, Nidia has the solution.
                Our payment processing services are designed for simplicity and efficiency,
                 allowing you to handle payments without the usual complications. From online
                  payments to mobile transfers, our platform is built to handle your financial
                   needs smoothly and securely.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
