# To do App

Creating Simple todo list app using MERN stack.

STACK info:

REACt.js (https://github.com/facebook/create-react-app) & Redux (npm i redux react-redux)

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

- react DOM
    npm i react-router-dom
    
- Using bootstrap 4 for css: no instilation required just need to link it inside public -> index.html

- moment: JavaScript library that removes the need to use the native JavaScript Date object directly
(https://www.npmjs.com/package/moment)

    npm i moment 

- Query string: part of a uniform resource locator that assigns values to specified parameters
(https://www.npmjs.com/package/query-string)

    npm i query-string

- React Strap: provides prebuilt Bootstrap 4 components that allow a great deal of flexibility and prebuilt validation
(https://www.npmjs.com/package/reactstrap)

    npm i reactstrap

- uuid: A universally unique identifier is a 128-bit number used to identify information in system.
(https://www.npmjs.com/package/react-uuid)
    npm i uuid

- react transition group: exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier
(https://www.npmjs.com/package/react-transition-group)

    npm i react-transition-group

- axios: promise-based HTTP client that works both in the browser and in a node. js environment.
(https://www.npmjs.com/package/react-axios)

    npm i axios

- bcryptjs: password-hashing function designed

    npm i bcryptjs

- jswonwebtoken: nternet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims
(https://www.npmjs.com/package/jwt-passport)

    npm i jswonwebtoken

Notes 

Please note that the client folder is our view folder make sure to install node_codule for both.

Client side is using proxy instead of .env


Tips 

If you have folder already created just run create-react-app . to install react packages inside that folder.

To run the dev enviroment: npm run dev

