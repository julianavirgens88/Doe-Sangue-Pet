require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const database = require('./config/database');
const indexRouter = require('./router/indexRoutes');
const cachorroRouter = require('./router/cachorroRouter');
const gatoRouter = require('./router/gatoRouter');
const authRouter = require('./router/authRouter');


app.use(express.json());
app.use(cors());
app.use(indexRouter);
app.use(cachorroRouter);
app.use(gatoRouter);
app.use(authRouter);

database.connect();

module.exports = app;