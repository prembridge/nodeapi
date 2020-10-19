// const pool = require("../../database");

// module.exports = {
//   create: (data, callBack) => {
//     pool.query(
//       `insert into city(ID, Name, CountryCode, District, Population) 
//                 values(?,?,?,?,?)`,
//       [
//         data.ID,
//         data.Name,
//         data.CountryCode,
//         data.District,
//         data.Population,
        
//       ],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   }
// }