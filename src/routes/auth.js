const router=require('express').Router()
const model=require('../database/user.js')

router.post('/add',async (req,res)=>{
    const newStudent=new model({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        phone:req.body.phone,
        college:req.body.college,
        course:req.body.course,
        projects:req.body.projects,
        interns:req.body.interns,
        cgpa:req.body.cgpa
    })
    await newStudent.save().then((user)=>{
        console.log('student is added');
        response.json(user)
    }).catch((err)=>{
        console.log(err);
    })
    })
router.get('/',(req,res)=>{
    model.find().then((frnds)=>{
    res.json(frnds)
    })
})
router.get('/:id',async (req,res)=>{
    const id=req.params.id
    await model.findById(id).then((user)=>{
        console.log(user);
        res.json(user)
    }).catch((err)=>{
       console.log(err)
    })
})
router.put('/edit/:id',async(req,res)=>{
    const id=req.params.id
    await model.findByIdAndUpdate(id,req.body).then((user)=>{
        console.log(user);
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
})
router.delete('/:id',async(req,res)=>{
    const id=req.params.id
    await model.findByIdAndDelete(id).then(()=>{
        console.log("User deleted successfully");
    }).catch((err)=>{
        console.log(err);
    })
})
    module.exports=router