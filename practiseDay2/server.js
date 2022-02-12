// const { json } = require("body-parser")
const express=require("express")
const mongoose=require("mongoose")
const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/books")
}
const BookSchema=new mongoose.Schema({
    bookName:{type:String,required:true},
    pages:{type:Number,required:true},
    author:{type:String,required:true},
    bestseller:{type:Boolean,required:false}

})
const Book=mongoose.model("books",BookSchema)
const app=express()
app.use(express.json())

app.post("/books",async (req,res)=>{
    const book=await Book.create(req.body)
    return res.status("200").send({book})
})
app.get("/books",async (req,res)=>{
    const book=await Book.find(req.body)
    return res.status("200").send({book})
})
app.patch("/books/:id",async (req,res)=>{
    const book=await Book.findByIdAndUpdate(req.params.id,req.body)
    return res.status("200").send({book})
})
app.delete("/books/:id",async (req,res)=>{
    const book=await Book.findByIdAndDelete(req.params.id)
    return res.status("200").send({book})
})
app.listen(2345,async function(){
    await connect()
    console.log("app is litsening on 2345");
})