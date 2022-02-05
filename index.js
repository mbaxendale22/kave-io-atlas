import express from 'express';
import mongoose from 'mongoose';
import router from './config/router.js';
import dotenv from 'dotenv';
import { port, dbURI } from './config/environment.js'
import path from 'path' // * <—- a new import from node

dotenv.config();

const app = express();
const __dirname = path.resolve() // * this line has been added, note this has a double underscore before it
// const port = process.env.PORT;

const startServer = async () => {
  await mongoose.connect(dbURI);
  console.log('db connected successfully');

  app.use(express.static(`${__dirname}/client/build`)) // * <— This line has been added before the express json middleware, it will allow the app to respond to a request with contents of this directory “build”, which will contain our React App code.
  app.use(express.json());

  app.use((req, _res, next) => {
    console.log(`incoming ${req.method} REQUEST, from ${req.url}`);
    next();
  });
  app.use('/api', router);

  app.use('/*', (_, res) => res.sendFile(`${__dirname}/client/build/index.html`)) // * <— This additional route handler has been added between the router and error handler middleware, it means that any incoming request that does not match a route in router should respond back with our frontend.

  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

startServer();
