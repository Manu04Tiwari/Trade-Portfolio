```mermaid
graph TD
    NextJS -->|Handles CRUD operations (Create, Read, Update, Delete)| Supabase[(Supabase (PostgreSQL))]
    Supabase -->|Manages stock data (Add, Edit, Delete)| NextJS
    Supabase -->|Performs calculations on user-added stocks using real-time data| FinnHubAPI[(FinnHub API)]
    FinnHubAPI -->|Provides real-time stock data for analysis| Supabase
    NextJS -->|Displays processed stock data for user analysis| FinnHubAPI
