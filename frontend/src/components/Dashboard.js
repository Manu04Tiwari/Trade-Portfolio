import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import StockForm from "./stockForm"; // Form to add/edit stocks

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStock, setCurrentStock] = useState(null);

  // Fetch all stocks from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/stocks") // Replace with your backend URL
      .then((response) => setStocks(response.data))
      .catch((error) => console.error("Error fetching stocks:", error));
  }, []);

  // Handle stock deletion
  const deleteStock = (id) => {
    axios
      .delete(`http://localhost:8080/api/stocks/${id}`)
      .then(() => {
        setStocks(stocks.filter((stock) => stock.id !== id));
      })
      .catch((error) => console.error("Error deleting stock:", error));
  };

  // Handle adding/updating a stock
  const saveStock = (stock) => {
    const apiCall = stock.id
      ? axios.put(`http://localhost:8080/api/stocks/${stock.id}`, stock) // Update
      : axios.post("http://localhost:8080/api/stocks", stock); // Add new

    apiCall
      .then((response) => {
        if (stock.id) {
          // Update existing stock
          setStocks(stocks.map((s) => (s.id === stock.id ? response.data : s)));
        } else {
          // Add new stock to the list
          setStocks([...stocks, response.data]);
        }
        setIsEditing(false);
        setCurrentStock(null);
      })
      .catch((error) => console.error("Error saving stock:", error));
  };

  return (
    <div>
      <h2>Stock Portfolio</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.id}</td>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>{stock.buyPrice}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => {
                    setIsEditing(true);
                    setCurrentStock(stock);
                  }}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => deleteStock(stock.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button
        onClick={() => {
          setIsEditing(true);
          setCurrentStock(null);
        }}
      >
        Add New Stock
      </Button>

      {isEditing && (
        <StockForm
          stock={currentStock}
          saveStock={saveStock}
          cancelEdit={() => {
            setIsEditing(false);
            setCurrentStock(null);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
