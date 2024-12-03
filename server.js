var express = require('express')
var userRouter = require('./controller/userController')
var mongoose = require ('mongoose')
var app= express()
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/user-db').then(
    ()=>{console.log("connected");
})
.catch((error)=>{
    console.log(error);
})

app.use('/users', userRouter)
var http = require('http')
var server = http.createServer(app)

server.listen(3000,()=>{
    console.log('server started !');
})