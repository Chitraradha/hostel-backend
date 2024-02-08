const mongoose= require("mongoose")
const hostelSchema=new mongoose.Schema(
    {
        Name:String,
        department:String,
        AdmissionNo:String,
        PhoneNo:String
    }
)
module.exports=mongoose.model("hostel",hostelSchema)