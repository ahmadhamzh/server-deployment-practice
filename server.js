'use strict'
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const errorHandel = require('./handeler/error500');
const pathNotFound = require('./handeler/error404');
const stamper = require('./middilewar/stamber')


app.get('/', (req, res)=>{
    res.status(200).send('this is rout /')
})

app.get('/data',stamper, (req,res)=>{
    const fullNameObject ={
        firstName : 'Ahmad',
        lastName : 'Hamza',
        time : req.timestamp    
    }
    res.status(200).json(fullNameObject)
})

app.get('/bad', (req, res,)=>{
throw new Error('you made an error')
})



app.use(errorHandel);
app.use(pathNotFound)




function start(){
    app.listen(PORT,()=>{
        console.log(`listning to ${PORT}`)
    })
}

module.exports = {
    start,
    app
}