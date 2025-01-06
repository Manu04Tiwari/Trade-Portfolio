# Trade Portfolio
![Trade Portfolio](https://github.com/Manu04Tiwari/Trade-Portfolio/blob/main/github%20front.png)
## Overview
This repository is for managing and tracking a trade portfolio. It includes features for monitoring trades, analyzing performance, and generating reports.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Manu04Tiwari/Trade-Portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Trade-Portfolio
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
## Set Up the Database

- Install MySQL if not already installed.
- Use the `setup.sql` file in the project directory to set up the database:
  ```sql
  CREATE DATABASE portfolio_db;
  USE portfolio_db;
  CREATE TABLE stocks (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      ticker VARCHAR(50) NOT NULL UNIQUE,
      quantity INT NOT NULL,
      buy_price DOUBLE NOT NULL
  );

## Configure Application Properties

- Update the `application.properties` file located in `src/main/resources` with your MySQL database credentials:
  ```properties
  spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
  spring.datasource.username=<your_mysql_username>
  spring.datasource.password=<your_mysql_password>
  spring.jpa.hibernate.ddl-auto=update


## Usage
1. Start the application:
   ```bash
   npm run start
   ```
2. Build the Project

- Ensure you have Maven installed.
- Run the following command to build the project:
  ```bash
  mvn clean install


3. Open your browser and go to `http://localhost:3000` to access the application.

## Assumptions or Limitations

- The application assumes a single user and does not support multi-user authentication.
- Portfolio value is calculated based on the stored `buy_price` and `quantity` without fetching real-time stock prices.
- The application is designed for local use and is not optimized for deployment on production servers.
- Validation for input fields is minimal and may need enhancement for edge cases.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Support
For support, please contact [Marttiwari8219@gmail.com](mailto:Marttiwari8219@gmail.com).
