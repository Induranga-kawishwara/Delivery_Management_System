# Delivery Management System

A comprehensive system to manage and track deliveries efficiently. This project aims to streamline the process from order placement to final delivery, providing real-time tracking and management tools for administrators, delivery personnel, and customers.

## Features

- **Admin Dashboard:** Centralized control panel for managing all operations.
- **Order Management:** Create, update, and track delivery orders.
- **Real-Time Tracking:** Live location tracking of delivery agents.
- **Route Optimization:** Suggests the most efficient delivery routes.
- **User Roles:** Different access levels for administrators, delivery agents, and customers.
- **Notifications:** Automated SMS/email notifications for order status updates.
- **Reporting & Analytics:** Generate reports on delivery performance and metrics.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js
- **Database:** MongoDB
- **Authentication:** JWT

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1.  Clone the repository
    `sh
git clone https://github.com/Induranga-kawishwara/Delivery_Management_System.git
`
2.  Navigate to the project directory
    `sh
cd Delivery_Management_System
`
3.  Install dependencies
    ````sh # For Node.js backend
    npm install
        # For Frontend (if in a separate folder)
        cd gui
        npm install
        ```
    ````
4.  Set up environment variables. Create a `.env` file and add the necessary configuration (e.g., database connection strings, API keys).
    `env
DB_HOST=localhost
DB_USER=root
DB_PASS=secret
JWT_SECRET=yourjwtsecret
`
5.  Run the application
    ````sh # Run the backend server
    npm start
        # Run the frontend development server
        cd gui
        npm start
        ```
    ````

## Usage

Provide instructions and examples for using the application. You can include screenshots or code snippets to demonstrate key functionalities.

- **Admin Login:** Navigate to `/admin` and use the default credentials.
- **Creating a new delivery:** Go to the 'Orders' tab and click 'New Order'.
