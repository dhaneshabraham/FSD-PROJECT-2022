const express=require('express');
const { hashSync } = require('bcrypt');
const bodyParser=require('body-parser');
const cors = require('cors');
const mongoose =require("./db.js");
const session = require('express-session')
const MongoStore = require('connect-mongo');
const app=express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use(express.static('public'))


const formData = require('express-form-data');

app.use(formData.parse());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const passport=require('passport')
const { compareSync } = require('bcrypt');
app.use(bodyParser.json());
app.use(cors())


const studentdata=require('./models/studentsignup')
const Employer=require('./models/employer')
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server Started @ ${PORT}`))




app.post('/signupStudent',function(req,res){   
        var studentSignup = {
        StudentName:req.body.StudentName,  
        Email:req.body.Email,
        // Password:req.body.Password
        Password: hashSync(req.body.Password, 10)
    };    
   var studentSignup = new studentdata(studentSignup);
   studentSignup.save((err,doc)=>{
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

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/FSDPROJECT', collectionName: "sessions" }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

require('./config/passportConfig')
app.use(passport.initialize())
app.use(passport.session())



// app.post('/login', passport.authenticate('local', { successRedirect: 'protected' }))

app.post('/signinStudent',function(req, res, next){
    studentdata.findOne({Email:req.body.Email},(err,student)=>{
        console.log(student);
        if(student){
            
            if (String(req.body.Password) == String(student.Password))
            { 
                console.log("student found");
                res.send(req.body.StudentName)
                let payload = {subject: req.body.Email+req.body.Password}
                // let token = jwt.sign(payload, 'studenttoken')
                // res.status(200).send({token,role:'student',id:student._id})
            }
            else
            {
                res.status(401).send('Invalid Student Password')
            }
 
        }else
        {
            res.status(401).send('Invalid credential')
        }
    })


})



app.post('/signupEmployer',function(req,res){   
    var employer = {
        CompanyName:req.body.CompanyName,  
        Email:req.body.Email,
        Password: hashSync(req.body.Password, 10)
    };    
    var employer = new Employer(employer);
    employer.save((err,doc)=>{
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


require('./fileupload')(app);
require('./courses')(app);
require('./sendmail')(app);
