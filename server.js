// server.js - Main entry point for the Product API
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const authenticate = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const PORT = process.env.PORT || 3000;

// Global Middleware
app.use(bodyParser.json());
app.use(logger); // Logs request method + URL + timestamp

// Routes with Authentication Middleware
app.use('/api/products', authenticate, productRoutes);

//Global Error Handler
app.use(errorHandler);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
