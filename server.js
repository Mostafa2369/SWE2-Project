const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Connect to database
connectDB();

// Route files
const users = require('./routes/users');


const app = express();

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
app.use(morgan('dev'));

// Body parser
app.use(express.json());


// Mount routers
app.use('/api/v1/users', users);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
);


