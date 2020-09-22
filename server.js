const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("Done")
})

var port=process.env.PORT || 3000
app.listen(process.env.port,()=>{
    console.log("Server is up and runnig on port" + port)
})