const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');
const { request } = require('express');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);


router.put('/enrollment/:id',(req, res, next) => {
   
var user={
        fullName : req.body.fullName,
        email : req.body.email,
    // user.password :req.body.password;
        phone: req.body.phone,
        address: req.body.address,
        qualification: req.body.qualification,
        passout:req.body.passout,
        skills: req.body.skills,
        employmentStatus: req.body.employmentStatus,
        techtraining: req.body.techtraining,
        course:req.body.course,
        image: req.body.image,
        exitexammark:req.body.exitexammark,
        status:req.body.status
}
    console.log(req.params.id)
    console.log(user)
    User.findByIdAndUpdate(req.params.id, { 
        $set: user },
        (err, doc) => {
            if (!err) { 
                console.log('Updated successfully')
                res.send(doc); }
            else { console.log('Error in Student Update :' + JSON.stringify(err, undefined, 2)); }
        });
})


module.exports = router;   



