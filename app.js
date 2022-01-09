const express = require('express');
const app= new express();
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public',express.static(path.join(__dirname, 'public')));


app.get('/', function(req,res){
    res.send("Welcome to coding competition #2 by Gana Gopinath ,NORKA B3");
});

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname,"/public/pages/home.html"));
});

app.post("/mailer",function (req, res) {
    var email = req.body.email;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'samplep220@gmail.com',
            pass: 'Sample@123'
        }
    });
    var mailOptions = {
        from: 'samplep220@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'Hii'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.send("Something went wrong.");
        } else {
            res.send('Mail sent successfully.');
        }
    });

})


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server Ready on"+PORT);
});