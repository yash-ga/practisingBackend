const express=require('express')
// const { connect } = require('http2')
const connect=require("./configs/db")
const userController=require("./controllers/users.controller")
const app=express()
app.use(express.json())
app.use("users",userController)
app.listen(2345,async()=>{
    await connect()
    console.log('app is listening on 2345');
})