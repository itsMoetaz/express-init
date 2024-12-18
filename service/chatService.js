const { date } = require('yup');
var Chat = require ('../model/ChatModel');
async function list(req,res,next){
    await Chat.find()
    .then((data,err)=>{
        if(err){
        res.status(503).json(err)}
        else{
            res.status(200).json(data)
        }
    })
}
async function supp(req,res,next){
    await Chat.findByIdAndDelete(req.params.id)   
     .then((data,err)=>{
        if(err){
        res.status(503).json(err)}
        else{
            res.status(200).json(data)
        }
    })

}

async function modifier(req,res,next){
    await Chat.findByIdAndUpdate(req.params.id,req.body,{new: true})
    .then((data,err)=>{
        if(err){
        res.status(503).json(err)}
        else{
            res.status(200).json(data)
        }
    })
}

const create = async (req,res,next)=>{
    const { msg, dateCreation } = req.body 


    await new Chat ({
        msg:msg,
        dateCreation: new Date()
        }).save()
        .then((err,data)=>{
            if(err){console.log(err);
        }})
    
res.json('Chat added ! msg : '+ msg + ' dateCreation : '+ new Date())
}

module.exports = { create, list, supp, modifier }