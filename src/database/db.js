const mongoose= require('mongoose')
mongoose.connect(`mongodb+srv://sahithi:mongodb@cluster0.iacdb.mongodb.net/Users?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})

module.exports=mongoose
