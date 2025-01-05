import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddStockForm = ({ stocks, setStocks }) => {
  const [stock, setStock] = useState({ name: '', ticker: '', quantity: '', buyPrice: '' });

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      id: stocks.length + 1,
      name: stock.name,
      ticker: stock.ticker.toUpperCase(),
      quantity: parseInt(stock.quantity),
      buyPrice: parseFloat(stock.buyPrice),
    };
    setStocks([...stocks, newStock]);
    setStock({ name: '', ticker: '', quantity: '', buyPrice: '' }); // Reset form
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formStockName">
        <Form.Label>Stock Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter stock name"
          value={stock.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formTicker">
        <Form.Label>Ticker</Form.Label>
        <Form.Control
          type="text"
          name="ticker"
          placeholder="Enter ticker"
          value={stock.ticker}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          placeholder="Enter quantity"
          value={stock.quantity}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formBuyPrice">
        <Form.Label>Buy Price</Form.Label>
        <Form.Control
          type="number"
          name="buyPrice"
          placeholder="Enter buy price"
          value={stock.buyPrice}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Add Stock
      </Button>
    </Form>
  );
};

export default AddStockForm;
