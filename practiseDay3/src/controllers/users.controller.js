const express=require('express')
const router=express.router()
const User=require("../models/users.model.js")
router.post("",async(req,res)=>{
    const user=await User.create(req.body)
    return res.status(200).send({user})
})
router.get("",async(req,res)=>{
const user=await User.find(req.body)

return res.status(200).send({user})
})
router.get("/:id",async(req,res)=>{
    const user=await User.findById(req.body)
    return res.status(200).send({user})

})
router.patch("/:id",async(req,res)=>{
    const user=await User.findByIdAndUpdate(req.body,req.params.id,{new:true})
    return res.status(200).send({user})


})
router.delete("/:id",async(req,res)=>{
    const user=await User.findByIdAndDelete(req.params.id)
    return res.status(200).send({user})

})
module.exports=router;