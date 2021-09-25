const express = require('express');
const path = require('path') ;
const nodemailer = require('nodemailer') ;
const dotenv = require('dotenv') ;

dotenv.config() ;

let iniPath = path.join(__dirname , 'public') ;
let app = express() ;

app.use(express.static(iniPath)) ;
app.use(express.json()) ;

app.get('/' , (req , res) => {
 res.sendFile(path.join(initialPath , 'index.html')) ;
})

app.post('/mail ' , (req , res) => {
 const { firstname , lastname , email , msg} = req.body ;

 const transporter = nodemailer.createTransport({
  service: 'gmail' ,
  auth: {
   user: process.env.EMAIL,
   pass: process.env.PASSWORD,
  }
 })

 const mailOptions = {
  from: 'Enter the sender email here' ,
  to: 'Enter the receiver email here' ,
  subject: 'Postfolio' ,
  text: `First name: ${firstname} , \nLast name:${lastname} , \nEmail: ${email} \nMessage: ${msg}`
 }

 transporter.sendMail(mailOptions, (err , result) => {
  if(err) {
   console.log(err) ;
   res.json('Oups! Une erreur est survenue.Reessayez svp.') ;
  } else{
   res.json('Merci de m\'avoir contacter . je vous répondrai sous 2 jours ouvrés') ;
  }
 })
})

app.listen('3000' , () => {
 console.log('listening.....') ;
})