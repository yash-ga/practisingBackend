const express=require('express')
// const { append } = require('express/lib/response')
const mongoose=require('mongoose')
const connect=()=>{
   return mongoose.connect('https/mongodb://127.0.0.1:27017/user')
}
const UserSchema= new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:false},
    dob:{type:Number,required:true}

})
const User=mongoose.model("users",UserSchema)
const app=express()
app.use(express.json())

app.get("/users",async(req,res)=>{

    const user=await User.create(req.body)
   return res.status("200").send({user})
})
app.post("/users",async (req,res)=>{
    const user=await User.find(req.body)
    return res.status("201").send({user})
})
app.patch("/users/:id",async(req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status("200").send({user})
})
app.delete("users/:id",async(req,res)=>{
    const user=await User.findByIdAndDelete(req.params.id)
    return res.status("200").send({user})

})
app.listen(5500,async function(){
    await connect()
    console.log("app is litsening on 5500");
})


