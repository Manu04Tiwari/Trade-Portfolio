graph TD
    NodeJS -->|CRUD Operations: Create, Read, Update, Delete| Database[(MySQL Database)]
    Database -->|Stores stock data: Add, Edit, Delete, Retrieve| NodeJS
    Database -->|Processes user-added stocks with real-time calculations| AlphaVantage[(Alpha Vantage API)]
    AlphaVantage -->|Delivers real-time stock data :prices, trends, metrics| Database
    NodeJS -->|Presents processed stock insights for user analysis| AlphaVantage
    User -->|Interacts with the platform| NodeJS
    NodeJS -->|Authenticates user access| AuthService[(Authentication Service)]

