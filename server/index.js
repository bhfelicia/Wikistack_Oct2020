const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()

app.use(morgan)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
