var mysql=require("mysql");

function getData(res,hide){
	var conn= mysql.createConnection({
  		host     : '127.0.0.1',
  		user     : 'root',
  		password : '',
  		database : 'h52003'
	});
	
	var sql="SELECT * FROM book";
	
	conn.query(sql, function (error, results) {
  		res.end(JSON.stringify(results));
	});
	
	conn.end();
}

function insert(res,arr){
	var conn= mysql.createConnection({
  		host     : '127.0.0.1',
  		user     : 'root',
  		password : '',
  		database : 'h52003'
	});
	
	var sql="INSERT INTO book VALUES(0,?,?,?,?,?,?)";
	
	conn.query(sql,arr,function (error, results) {
  		res.end("<script>location='/'</script>");
	});
	
	conn.end();
}

function getid(res,arr){
	var conn= mysql.createConnection({
  		host     : '127.0.0.1',
  		user     : 'root',
  		password : '',
  		database : 'h52003'
	});
	
	var sql="SELECT * FROM book WHERE id=?";
	
	conn.query(sql,arr,function (error, results) {
  		res.end(JSON.stringify(results));
	});
	
	conn.end();
}

function del(res,arr){
	var conn= mysql.createConnection({
  		host     : '127.0.0.1',
  		user     : 'root',
  		password : '',
  		database : 'h52003'
	});
	
	var sql="UPDATE book SET name=?,price=?,count=?,zuozhe=?,jianjie=?,content=? WHERE id=?";
	
	conn.query(sql,arr,function (error, results) {
  		res.end("<script>location='/'</script>");
	});
	
	conn.end();
}

module.exports={
	"getData":getData,
	"insert":insert,
	"getid":getid,
	"del":del,
}
