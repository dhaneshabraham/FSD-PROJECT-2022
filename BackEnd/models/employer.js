const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FSDPROJECT');
const Schema = mongoose.Schema; 
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');

var employerSchema = new Schema({
    CompanyName:String, 
    Email:{
        type:String,
        unique:true
        },
    Password:String,
});

var employer = mongoose.model('employer', employerSchema);   
module.exports = employer;

