const express=require("express")
const hostelModel=require("../model/hostelmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let hostel=new hostelModel(data)
    let result=await hostel.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let data=await hostelModel.find() 
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input =req.body
    let data=await hostelModel.find(input)
    res.json(data)
})

module.exports=router