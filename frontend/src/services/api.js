import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";  // Backend API URL

export const getPortfolioMetrics = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/portfolio`);
        return response.data;  // Example: { totalValue: 15000, profitLoss: 5000 }
    } catch (error) {
        console.error("Error fetching portfolio metrics:", error);
        throw error;
    }
};

export const getRecentTrades = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trades`);
        return response.data;  // Example: [{ id: 1, symbol: "AAPL", action: "BUY", amount: 10 }]
    } catch (error) {
        console.error("Error fetching trades:", error);
        throw error;
    }
};
