# To do App

Creating Simple todo list app using MERN stack.

STACK info:

REACt.js (https://github.com/facebook/create-react-app) & Redux

Express.js (npm i express)

Node.js (https://nodejs.org/en/download/)

Mongo Atlas it is free cloud based database you can choose your prefered provider such as amazon AWS or Michrosoft Azure and Google Cloud (https://www.mongodb.com/cloud/atlas)

Packaged used 

- pakage.json file:
    npm init -y

- express:framework for Node.js, dotenv: for environmental variables, nodemon: to run server continuously: 
    npm i express dotenv nodemon
    
- body parser and morgan: useful for seding data through routes: 
    npm i body-parser morgan 

- Cookie parser: to save user credentials in the cookie: 
    npm i cookie-parser

- express-validator: v 5.3.1 required otherwise will recieve error: "TypeError: expressValidator is not a function": 
    npm i express-validator
After installing the express-validator then go to your package.json and update it to use version to use 5.3.1 like so -> "express-validator": "^5.3.1",

- json web token: for user signin:  
    npm i express-jwt jsonwebtoken

- formidable and lodash: to upload and send files and images:
    npm i formidable lodash

- cors: for providing a Connect/Express middleware that can be used to enable CORS with various options.
    npm i cors

- concurrently: allows to run more than one npm script
    npm i concurrently

Notes 

Please note that the client folder is our view folder.

client side is using proxy instead of .env file to run.

Tips 

If you have folder already created just run create-react-app . to install react packages inside that folder.

