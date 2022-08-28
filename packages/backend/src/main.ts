/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { connect } from 'mongoose';
import { environment } from './environments/environment';
import apiRoutes from './api';
import morgan = require('morgan');

const app = express();

connect(environment.DB_URI, {});

app.use(express.json());
app.use(morgan('dev'));
app.use('/api', apiRoutes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
