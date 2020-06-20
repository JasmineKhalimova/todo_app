import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const mongoose = require("mongoose");// DB connection
const morgan = require("morgan");// using morgan as middlewares
const cookieParser = require("cookie-parser");// to save user credentials in the cookie
const cors = require("cors");// to handle api request from different origin


// routes
import authRoutes from './routes/api/auth';
import itemRoutes from './routes/api/items';
import userRoutes from './routes/api/users';

require("dotenv").config();

const app = express();

// CORS Middleware
app.use(cors());

// Logger Middleware
app.use(morgan('dev'));

// Bodyparser Middleware
app.use(bodyParser.json());

//app
const app = express();

//DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>console.log('DB Connected'));

// Use Routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;