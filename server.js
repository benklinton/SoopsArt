var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var path = require('path');
var PORT = 5000

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 587,
    auth: {
        user: "example@gmail.com", //replace with the email address
        pass: "password" //replace with the password
    }
});

// verify connection configuration
transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})

app.use(express.json())

app.use(express.static("client/build"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/send', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
    var content = `name: ${name} \n email: ${email}  \n message: ${message} `
    var mail = {
        from: name,
        to: "benklinton@gmail.com",
        subject: subject,
        text: content
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})