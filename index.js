const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
//logging middleware
app.use(morgan);
//serving up static files
app.use(express.static(path.join(__dirname, "./public")))
//parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

