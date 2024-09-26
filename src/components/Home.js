import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CurrencyConverter from "./CurrencyConverter";
import "./Home.css";
import successImage from "../assets/successImage.gif";
import payer from "../assets/payer.avif";
const Home = () => {
  return (
    <Container fluid className="nidiahome">
      <Row className="align-items-center text-left px-4">
        <Col md={6} className="mb-3 mb-md-0">
          <h1 className="c-font">Welcome to Niba</h1>
          <p className="f-font">
            Your trusted partner for seamless borderless money transfers,
            currency conversion, and payments. We are dedicated to simplifying
            international transactions, making it easy for you to send, receive,
            and manage money across borders with ease and confidence. Join us in
            enabling a world without financial boundaries.
          </p>
          <Button variant="dark" className="pb-6" href="/services">
            Learn More
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={
              "https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/pass/How-to-Choose-a-Laptop-August-2023-Gear.jpg"
            }
            alt="Welcome to Niba"
            className="img-fluid"
            style={{
              borderRadius: "5px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Col>
      </Row>

      <Row className="paystack-info p-sm-5 mt-5">
        <Col>
          <h2 className="c-font">Modern online and offline payments</h2>
          <p className="f-font">
            Modern online and offline payments. NIBA helps businesses get paid
            by anyone, anywhere in the world. With our secure and efficient
            payment solutions, businesses can effortlessly accept payments both
            online and offline, expanding their reach and making transactions
            easy for customers across the globe. Empower your business with
            NIBA’s global payment system today.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center text-left px-4 justify-content-center">
        <Col md={6} className="pr-4 mb-3 mb-md-0 d-flex justify-content-center">
          <img
            src={successImage}
            alt="Transaction Success"
            className="img-fluid"
            style={{
              width: "70%",
              borderRadius: "5px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Col>

        <Col md={6} className="pl-4 d-flex flex-column align-items-center">
          <h2 className="text-center c-font">
            Enjoy phenomenal transaction success rates
          </h2>
          <p className="text-center f-font">
            We automatically route payments through the most optimal channels,
            ensuring the highest transaction success rates in the market.
            Delight clients with a seamless payment experience. We give our
            users the gift of modern, frictionless, painless payments. Make
            swift transactions however you want.
          </p>
          <Button variant="dark" href="/services" className="mt-2">
            Learn More
          </Button>
        </Col>
      </Row>

      <Row className="paystack-info mt-5 p-sm-5">
        <Col>
          <h2 className="c-font">Simple, easy payments</h2>
          <p className="f-font">
            Building a business is hard, but getting paid shouldn’t be. At NIBA,
            we streamline the payment process, allowing you to focus on growing
            your business while we handle your transactions with speed and
            efficiency. Simplify your payment experience with NIBA today.
          </p>
        </Col>
      </Row>

      <Row className="textmatch">
        <Col>
          <h2 className="c-font">Our Services</h2>
          <p className="f-font">
            We offer a variety of services to cater to your needs:
            <ul>
              <li>&nbsp;✔️&nbsp; Borderless Money Transfers</li>
              <li>&nbsp;✔️&nbsp; Currency Conversion</li>
              <li>&nbsp;✔️&nbsp; Payment Facilitation</li>
            </ul>
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mt-5 px-4">
      
        <Col md={6} className="pr-4">
          {" "}
          <h2 className="c-font">
            Protect yourself and your customers with advanced fraud detection
          </h2>
          <p className="f-font">
            Niba’s combination of automated and manual fraud systems protect you
            from fraudulent transactions and associated chargeback claims.
          </p>
          <h2 className="c-font">Detailed reporting for accounting, reconciliation, and audits</h2>
          <p className="f-font">
            Understand your customers’ purchase patterns and do easy
            reconciliations with a robust data Dashboard and easy exports.
          </p>
        </Col>
        <Col md={6} className="pl-4">
          {" "}
          <img
            src={payer}
            alt="Success"
            className="img-fluid"
            style={{
              borderRadius: "5px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
            }}
          />
        </Col>
      </Row>

      <Row className="justify-content-center mt-5 mb-5">
        <Col>
          <CurrencyConverter />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
