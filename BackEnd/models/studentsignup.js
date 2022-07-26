const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FSDPROJECT');
const Schema = mongoose.Schema; 
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');

var studentsSignupSchema = new Schema({
    StudentName:String, 
    Email:{
        type:String,
        unique:true
        },
    Password:String,
    // saltSecret:String
});
// studentsSignupSchema.pre('save',function(next){
//         bcrypt.genSalt(10,(err,salt)=>{
//             bcrypt.hash(this.Password,salt,(err,hash)=>{
//                 this.Password=hash;
//                 this.saltSecret=salt;
//                 next();
//             })
//         })
// })
var studentSignup = mongoose.model('studentsignups', studentsSignupSchema);   
module.exports = studentSignup;

