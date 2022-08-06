
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

module.exports = function(app) {  //receiving "app" instance
    app.route('/mail').post(sendMail);
}

function sendMail(request, response){
    transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'testinganoop04@gmail.com',
          pass: 'oudensilzwfclvan'
        }
      }));
      
      
      mailOptions = {
        from: 'testinganoop04@gmail.com',
        to: 'pkshafna123@gmail.com'
      };


    mailOptions.subject = request.body.contactSubject;
    mailOptions.text = " Email : " + request.body.contactEmail + "\n" +
                            " Name : " + request.body.contactName + "\n" +
                            " Telephone : " + request.body.contactTelephone + "\n\n\n" + 
                            request.body.contactContent;
    console.log(mailOptions)
    this.transporter.sendMail(this.mailOptions,  function(error , info ){
                                            if (error) {
                                              console.log(error);
                                            } else {
                                              console.log('Email sent: ' + info.response);
                                            }
    });


    response.end('"Mail send successfully"');
  
}