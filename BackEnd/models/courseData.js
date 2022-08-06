const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FSDPROJECT');
const Schema = mongoose.Schema; 

var courseSchema = new Schema({   
    name: String,
    fee: String,
    duration: String,
    mode: String,
    imageName: String
});

var courseData = mongoose.model('courseData', courseSchema);   
module.exports = courseData;