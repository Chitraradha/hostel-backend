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

module.exports=router