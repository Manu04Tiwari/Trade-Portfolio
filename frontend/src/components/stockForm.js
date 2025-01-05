import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const StockForm = ({ stock, saveStock, cancelEdit }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    ticker: "",
    quantity: "",
    buyPrice: "",
  });

  useEffect(() => {
    if (stock) {
      setFormData(stock);
    }
  }, [stock]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveStock(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Ticker</Form.Label>
        <Form.Control
          type="text"
          name="ticker"
          value={formData.ticker}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Buy Price</Form.Label>
        <Form.Control
          type="number"
          name="buyPrice"
          value={formData.buyPrice}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>{" "}
      <Button variant="secondary" onClick={cancelEdit}>
        Cancel
      </Button>
    </Form>
  );
};

export default StockForm;
