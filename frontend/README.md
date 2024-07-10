# Food Delivery App

Hunger is a comprehensive food delivery application developed with the MERN stack (MongoDB, Express, React, Node.js). The app enables users to browse menus, place orders, and make payments effortlessly. It also features an admin panel for managing products, orders, and other administrative functions.

## Features

- **User Interface**

  - Built with ReactJS and JavaScript
  - Styled with pure CSS for a responsive design
  - Utilizes Vite as the front-end build tool for efficient development

- **React Components and Libraries**

  - React Hooks for state management and lifecycle methods
  - Axios for communication with the backend API
  - React Router for handling client-side routing
  - React Toastify for displaying notifications and alerts

- **Backend**

  - Node.js and Express for building the server
  - MongoDB for data storage
  - Mongoose ODM for schema management and data modeling
  - JSON Web Tokens (JWT) for user authentication and authorization

- **Payment Integration**

  - Stripe API for secure and reliable payment processing

- **Admin Panel**
  - Add, list, modify, and update products and orders
  - Change order status
  - Synchronization between front-end and back-end for real-time updates

## Getting Started

To run the coconut Food Delivery App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Priyallohar/hunger`

2. Install dependencies for the front-end and back-end:

- Front-end: `cd hunger/frontend && npm install`
- Back-end: `cd hunger/backend && npm install`

3. Set up environment variables for the back-end (e.g., MongoDB connection string, Stripe API keys)
4. Start the development servers:

- Back-end: `npm start` (in the `hunger/backend` directory)
- Front-end: `npm run dev` (in the `hunger/frontend` directory):

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
4. Start the frontend server:
   ```sh
   npm run dev
   ```

```
- Admin-panel `npm run dev` (in the `hunger/admin` directory)
```

## Payment Integration

hunger integrates with the Stripe API to ensure secure and reliable payment processing. For testing, you can use the following test card details:

- Card Number: `4242424242424242`
- CVV: Any value
- Expiry Date: Any future date

Please remember that these test card details are provided by Stripe solely for testing purposes. Do not use actual credit card information during testing.