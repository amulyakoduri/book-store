const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require('./config/database');

dotenv.config({path: "backend/config/config.env"})

connectDataBase();
app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
});