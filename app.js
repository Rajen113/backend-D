const express=require("express")
const app=express()
require('dotenv').config()
const port=process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine",'ejs')

app.get('/',(req,res)=>{
    res.send("done")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})