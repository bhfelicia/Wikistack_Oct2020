const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
//logging middleware
app.use(morgan);

//parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
