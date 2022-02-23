const express=require("express")
const app=express()
app.use(express.json())
app.listen(5700,async function(){

    
    await console.log('app is listineing on 5700');
})
