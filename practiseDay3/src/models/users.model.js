
const mongoose=require("mongoose")
const userSchema=new mongoose.schema({
    name:{type:String,require:true},
    age:{type:Number,require:true},
    email:{type:String,require:true},
    phoneNo:{type:Number,require:true}
})
const User=mongoose.model("users",userSchema)
module.exports=User;