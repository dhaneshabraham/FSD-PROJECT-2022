require('./config/passportConfig')

const express=require('express');

const bodyParser=require('body-parser');
const cors = require('cors');
const mongoose =require("./db.js");

const app=express();
const passport=require('passport')
app.use(bodyParser.json());
app.use(cors())
app.use(passport.initialize())

const studentsignupdata=require('./models/studentsignup')
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server Started @ ${PORT}`))
app.post('/signupStudent',function(req,res){   
    console.log(req.body);
    var studentsSignup = {
        StudentName:req.body.StudentName,  
        Email:req.body.Email,
        Password:req.body.Password};
    
   var studentsSignup = new studentsignupdata(studentsSignup);
   studentsSignup.save((err,doc)=>{
    if(!err)
        res.send(doc);
    else
    {
        if(err.code==11000)
            res.status(422).send('Email already exist');
        else
            return next(err);

    }
   });
});
module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(error,student,info)=>{
            if(err) return res.status(400).json(err);
    })

}
