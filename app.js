const express=require("express")
const app=express()
require('dotenv').config()
const port=process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("done")
})

app.get("/user",(req,res)=>{
    res.send("user")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})