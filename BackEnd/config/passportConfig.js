const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const student=require('../models/studentsignup')
const{compareSync}=require('bcrypt')
// require('../models/studentsignup')
// var Student = mongoose.model('studentsignups');

passport.use(
    new localStrategy(
        (username, password, done) => {
            student.findOne({ Email: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    // unknown student
                    else if (!user)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!compareSync(password,user.password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, user);
                });
        })
);

passport.serializeUser(function(user,done){
    done(null,user.id)
})

passport.deserializeUser(function(id,done){
    student.findById(id,function(err,user){
        done(err,user)
    })

})