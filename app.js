require('dotenv').config({path:'.env'});

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const path = require('path');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,'public')));

app.use(cookie());
app.use(body.urlencoded({extended:true}));
app.use(body.json());

app.get('/',(req,res)=>{
    res.render('multiform');
})


module.exports = app;
