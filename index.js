const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require("mongoose");

/**
 * decleration
 */
const app = express();
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

/**
 * database code
 */
mongoose.connect("mongodb:://localhost:27017/wikiDB", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const articleSchema = {
    title: String,
    content: String
}