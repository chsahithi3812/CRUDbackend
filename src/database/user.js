const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name: String,
    username:String,
    email:String,
    phone:Number,
    college:String,
    course:String,
    projects: [{type:String}],
    interns: [{type:String}],
    cgpa:Number,
})
const model=new mongoose.model("Model",userSchema)
module.exports=model