const express = require("express")

const app = express()
const PORT = 5000
const items = [
    {id:1,itemName:"pen",price:1000},
    {id:2,itemName:"paper",price:100}
];
app.get("/items",(req,res)=>{
    res.status(200),send(items);
});
app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
});