// const {
//     create,
//     getUserByUserEmail,
//     getUserByUserId,
//     getUsers,
//     updateUser,
//     deleteUser
//   } = require("../users/user.sevice");
//   const { hashSync, genSaltSync, compareSync } = require("bcrypt");
//   //const { sign } = require("jsonwebtoken");
  
//   module.exports = {
//     createUser: (req, res) => {
//       const body = req.body;
//       const salt = genSaltSync(10);
//       body.CountryCode = hashSync(body.CountryCode, salt);
//       create(body, (err, results) => {
//           console.log("result",results)
//         if (err) {
//           console.log(err);
//           return res.status(500).json({
//             success: 0,
//             message: "Database connection errror"
//           });
//         }
//         return res.status(200).json({
//           success: 1,
//           data: results
          
//         });
//       });
//     }}