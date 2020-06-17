const express = require("express");// node API framework
const mongoose = require("mongoose");// DB connection
const morgan = require("morgan");// using morgan as middlewares
const bodyParser = require("body-parser");// will get the body of the API request
const cookieParser = require("cookie-parser");// to save user credentials in the cookie
const cors = require("cors");// to handle api request from different origin

// load env variables
const dotenv = require('dotenv');
dotenv.config();

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
app.use(cookieParser());
app.use(cors());

// Imporing Routes
const items = require("./routes/api/items");

//Using Routes
app.use("/api/items", items);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});