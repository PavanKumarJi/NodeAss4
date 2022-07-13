// const express = require("express");
// const app = express();

// const bcrypt = require("bcrypt");
// const bodyParser = require("body-parser");

// const saltRounds = 10;
// const pswd = "HelloWorld";


// app.use(bodyParser.json());
// app.get("/", function (req, res) {
//   bcrypt.genSalt(saltRounds, function (err, salt) {
//     if (err) console.log(err);
//     else {
//       console.log(salt);
//       res.send(salt);
//     }
//   });
// });

// app.get("/genPwd", function (req, res) {
//   bcrypt.genSalt(saltRounds, function (err, salt) {
//     if (err) console.log(err);
//     else {
//       bcrypt.hash(pswd, salt, function (err, hashPswd) {
//         console.log(hashPswd);
//         res.send(hashPswd);
//       });
//     }
//   });
// });

// app.get("/genPwd2", function (req, res) {
//   bcrypt.hash(pswd, saltRounds, function (err, hashPswd) {
//     console.log(hashPswd);
//     res.send(hashPswd);
//   });
// });

// app.post("/verify", function (req, res) {
//   bcrypt.compare(req.body.pwd, req.body.hash, function (err, result) {
//     if (result) {
//       res.send("Verified");
//     } else {
//       res.send("N/A");
//     }
//   });
// });

// app.listen(4000);



const express=require('express');
const auth=require('./auth')
const app=express()
app.use(express.json())
app.use('/auth',auth)
app.get('/',(req,res)=>{
  res.send("this is main server")
})
app.listen(4005,()=>{
  console.log("app is running")
})


