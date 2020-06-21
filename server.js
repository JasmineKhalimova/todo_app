const express = require("express");
const mongoose = require("mongoose");// DB connection
const morgan = require("morgan");// using morgan as middlewares
const bodyParser = require("body-parser");
const cors = require("cors");// to handle api request from different origin

require("dotenv").config();

// importing routes
const authRoutes = require("./routes/api/auth");
const itemRoutes = require("./routes/api/items");
const userRoutes = require("./routes/api/users");

//app
const app = express();

//DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>console.log('DB Connected'));

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});