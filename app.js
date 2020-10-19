 require("dotenv").config()
const express = require("express");
 const app = express();
 //port = process.env.PORT || 3000,
// const userRouter = require("../Project/cofing/api/users/user.router");

// //app.use(express.json());

// app.use(express.json());

// app.use("/api/users", userRouter);

// // app.get("/api", (req,res ) =>{
// //     res.json({
// //         suecess :1,
// //         message: "rest api working"
// //     })
// // });
//const port = process.env.PORT || 4000;
 app.listen(process.env.APP_PORT, () => {
  console.log("server up and running on  Port:",process.env.APP_PORT );

//app.use("/api",(req,res)=>{
var request = require('request');

var options = {
  'method': 'POST',
  'url': 'https://ancient-oasis-01562.herokuapp.com/users',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"username":"jacob.sushil@geneza.in","password":"Jacob13sushil"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  //var res = JSON.parse(response)
  var result =  response.body
var json = JSON.parse(result)
var value = json.tokens.idToken
var optionsss = {
  'method': 'POST',
  'url': 'https://truelife.account.filemaker-cloud.com/fmi/data/v1/databases/DUE/sessions',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Fmid '+ value
  }
};
request(optionsss, function (error, response) {
  
  if (error) throw new Error(error);
  var result = response.body
  console.log(result+"result...");
  app.get("/api",(req,res ) =>{
       res.json({
            suecess :1,
            message: response.body
         })
     });
});

//console.log( JSON.stringify(value)+" total result");
});
// var optionsss = {
//   'method': 'POST',
//   'url': 'https://truelife.account.filemaker-cloud.com/fmi/data/v1/databases/DUE/sessions',
//   'headers': {
//     'Content-Type': 'application/json',
//     'Authorization': 'Fmid' + value
//   }
// };
// request(optionsss, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
 });