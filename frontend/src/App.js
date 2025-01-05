import React, { useState } from 'react';
import './App.css';
import { Container, Table, Button } from 'react-bootstrap';
import AddStockForm from './components/AddStockForm';

function App() {
  const [stocks, setStocks] = useState([
    { id: 1, name: 'Stock A', ticker: 'A', quantity: 10, buyPrice: 100 },
    { id: 2, name: 'Stock B', ticker: 'B', quantity: 20, buyPrice: 200 },
  ]);

  // Handle delete
  const handleDelete = (id) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
  };

  // Handle edit (for simplicity, we'll just log the edit action)
  const handleEdit = (id) => {
    console.log('Editing stock with ID:', id);
    // You can implement an edit form modal here
  };

  return (
    <Container>
      <h1>Portfolio Dashboard</h1>
      <AddStockForm stocks={stocks} setStocks={setStocks} />
      <StockTable stocks={stocks} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
}

const StockTable = ({ stocks, onEdit, onDelete }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Ticker</th>
        <th>Quantity</th>
        <th>Buy Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {stocks.map((stock, index) => (
        <tr key={stock.id}>
          <td>{index + 1}</td>
          <td>{stock.name}</td>
          <td>{stock.ticker}</td>
          <td>{stock.quantity}</td>
          <td>${stock.buyPrice}</td>
          <td>
            <Button variant="warning" size="sm" onClick={() => onEdit(stock.id)}>
              Edit
            </Button>{' '}
            <Button variant="danger" size="sm" onClick={() => onDelete(stock.id)}>
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default App;
