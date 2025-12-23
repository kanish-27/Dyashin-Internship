const express = require("express")
const morgan = require("morgan")

const app = express()
const PORT = 4000
app.use(morgan("dev"));
app.get("/data",(req,res)=>{
    res.send("This is third party middleware");
})
app.get("/sum",(req,res)=>{
    let sum=0;
    for(let i=0;i<100000000000;i++){
        sum+=1;
    }
    res.send({sum:sum});
});
app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
})