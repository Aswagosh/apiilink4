const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("  Loading....")
})

app.listen(8084,()=>{
    console.log("Service is running")
})