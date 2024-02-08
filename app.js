const express =require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const hostelrouter=require("./controller/hostelrouter")


const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Chitrakradha2000:radha2000@cluster0.djtheuk.mongodb.net/hostelDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/hostel",hostelrouter)

app.listen(3010,()=>{
    console.log("server running");
})