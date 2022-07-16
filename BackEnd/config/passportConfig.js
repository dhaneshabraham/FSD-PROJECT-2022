const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
require('../models/studentsignup')
var Student = mongoose.model('studentsignups');

passport.use(
    new localStrategy({ usernameField: 'Email' },
        (username, password, done) => {
            Student.findOne({ Email: username },
                (err, student) => {
                    if (err)
                        return done(err);
                    // unknown student
                    else if (!student)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!student.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, student);
                });
        })
);