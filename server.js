
'use strict'

var express = require("express");
var app = express();

require('dotenv').load();

app.listen(process.env.PORT,function(){
    console.log('listening');
});