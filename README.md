# OnlineMarket API
### OnlineMarket API is a ​RESTful API  provides users to buy products online that can be easily used

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm run dev` to start the local server , it will run on localhost:5000

# Code Overview

## Main Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 


## Application Structure

- `server.js` - The entry point to our application. This file defines our express server and connects it to database. It also requires the routes and models we'll be using in the application.
- `controllers/` - This folder contains business logic of our project.
- `middlerware/` - This folder contains error handling and authentication middleware for our project.
- `config/` - This folder contains connection for mongoDB using mongoose.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.

   
 ### Endpoints
   
*To user register*:
  - **POST** : 
    ``` localhost:5000/api/v1/users/auth/register ```
  - Request parameters (Body) :
       - email : string
       - name : string
       - password : string
       - role : string
      
*To login*:
  - **POST** : 
  ``` localhost:5000/api/v1/users/auth/login ```
  - Request parameters (Body) :
     - email : string
     - password : string
    
*To get users*:
  - **GET** : 
  **User must be an admin**
  ``` http://localhost:5000/api/v1/users ``` 
  
   
