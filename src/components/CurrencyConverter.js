import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  const fetchConversionRate = async () => {
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/dfa9fe95d0ced9a64679fee2/latest/${fromCurrency}`);
      const rate = response.data.conversion_rates[toCurrency];
      setConversionRate(rate);
      setConvertedAmount((amount * rate).toFixed(2));
      setError(null); // Clear error on successful fetch
    } catch (err) {
      setError('Failed to fetch conversion rate');
    }
  };

  useEffect(() => {
    fetchConversionRate();
  }, [fromCurrency, toCurrency]); // Depend on currencies change only

  const handleConvert = () => {
    fetchConversionRate();
  };

  return (
    <div className="currency-converter p-3">
      <h3>Currency Converter</h3>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="fromCurrency">
          <Form.Label>From Currency</Form.Label>
          <Form.Control
            as="select"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currencies as needed */}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="toCurrency">
          <Form.Label>To Currency</Form.Label>
          <Form.Control
            as="select"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currencies as needed */}
          </Form.Control>
        </Form.Group>
        <Button variant="dark" type="button" onClick={handleConvert}>
          Convert
        </Button>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}
      {conversionRate !== null && (
        <div className="mt-3">
          <h3>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
