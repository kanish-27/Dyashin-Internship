const express = require("express");
const app = express()
const PORT = 5000;

app.get("/",(req,res)=>{
   // res.send("this is a error handling middleware");
   throw Error("This is an error");
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send({
        isError:true,
        message:err.message,
        data:null,
    });
})

app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
});