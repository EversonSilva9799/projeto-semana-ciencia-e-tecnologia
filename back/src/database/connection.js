const mysql = require('mysql');
const { promisify } = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'instagramclone',
    user: 'root',
    password: ''

});




module.exports = promisify(connection.query).bind(connection);


// var db_config = {
//     host: '45.34.12.250',
//     database: 'instagramclone',
//     port: 3306,
//     user: 'everson',
//     password: 'instagramclone123'
// };


// let  connection = '';
// function handleDisconnect() {
//   connection = mysql.createConnection(db_config); 
                                 
//   connection.on('error', function(err) {
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
//       handleDisconnect();                        
//     } else {                                      
//       throw err;                                  
//     }
//   });

  
    
// }


// handleDisconnect();

// module.exports = promisify(connection.query).bind(connection);


