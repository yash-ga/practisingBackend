const express=require('express')
// const { append } = require('express/lib/response')
const mongoose=require('mongoose')
const connect=()=>{
   return mongoose.connect('https/mongodb://127.0.0.1:27017/user')
}
const UserSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:false},
    dob:{type:Number,required:true}

})
const User=mongoose.model("users",UserSchema)
const app=app.use()
app.json()

app.get("/users",async(req,res)=>{

    const User=await User.get(req.body)
    res.status("200").send({User})
})


