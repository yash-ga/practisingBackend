const express=require('express')
const router=express.router()
const User=require("../models/users.model.js")
router.get("",async(req,res)=>{
const user=await User.find(req.body)

return res.status(200).send({user})
})