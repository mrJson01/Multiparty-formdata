require('dotenv').config({path:'.env'});

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const path = require('path');
const multiparty = require('multiparty');

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

app.post('/send-data',(req,res)=>{
    
    let form = new multiparty.Form({
        uploadDir:'public/upload',
        autoFiles:true,
        maxFilesSize:1000*1000
    });
    
    form.on('field',(name,value)=>{
        
        console.log(`${name} : ${value}`);
    });
    
    form.on('file',(name,file)=>{
        
    });
    
    form.on('error',(error)=>{
        
        console.log(error);
    });
    
    form.parse(req);
    
});


module.exports = app;
