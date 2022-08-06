//routes

var fs = require('fs');

module.exports = function(app) {  //receiving "app" instance
    app.route('/uploadCourseImage').post(fileUpload);
    
}

//API functions
//function getAPI(request, response) {
//    response.json(family);
//}

function fileUpload(request, response)  {
    let fileToUpload = request.files.file;
    let imageStorePath = './public/images/';
    if(Object.keys(fileToUpload).length !== 0){
        console.log(fileToUpload);

        let filePathToStore = imageStorePath + fileToUpload.originalFilename;

        fs.copyFile(fileToUpload.path, filePathToStore, (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
            else {
                console.log("file uploaded");
            }
          });

    }    
    response.end('"Successful fileupload"');
}