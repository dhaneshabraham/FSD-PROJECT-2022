const courseData = require("./models/courseData");

module.exports = function(app) {  //receiving "app" instance
    app.route('/courses').post(saveCourse);
    app.route('/courses').get(courseList);
    app.route('/courses').delete(deleteCourse);
}

function saveCourse(request, response){

    console.log(request.body);

    let newCourse = {
        name : request.body.courseName,
        fee : request.body.courseFee,
        duration : request.body.courseDuration,
        mode : request.body.courseMode,
        imageName : request.body.courseImage
    }

    let newCourseObj = new courseData(newCourse);
    newCourseObj.save();


    response.end('"Course added Successfully"');

}

function courseList(request, response){
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    courseData.find()
       .then(function(course){
           console.log(course);
           response.send(course);
       })
}

function deleteCourse(request, response){
    console.log(request);
    courseData.deleteOne({ name: request.body.courseName }).then(response.end('"Delete success"'))
    .catch(response.end('"delete err!"'));
}