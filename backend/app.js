const express = require("express");
const app = express();
app.use(express.json())

const Book = require('./routes/bookRoute');

app.use('/api/v1',Book)

module.exports = app;