var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'h52003'
});

var sql="SELECT * FROM user";

connection.query(sql, function (error, results) {
  console.log(JSON.stringify(results));
});
