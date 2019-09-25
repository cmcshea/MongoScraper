//Dependencies
var express = require("express");
var mongoose = require("mongoose");

//Scrapping tools
var axios = require("axios");
var cheerio = require("cheerio");


//Initialize express
var app = express();

//Configure middleware
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
