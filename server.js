var express = require('express')
var userRouter = require('./controller/userController')
var osRouter = require('./controller/osController')
var productRouter = require('./controller/productController')
var chatRouter = require('./controller/chatController')
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
app.use('/os',osRouter)
app.use('/product',productRouter)
app.use('/chat',chatRouter)

var http = require('http')
var server = http.createServer(app)

server.listen(3000,()=>{
    console.log('server started !');
})