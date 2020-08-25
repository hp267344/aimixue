const http=require("http");
const url=require("url");
const fs=require("fs");
const mysql=require("mysql");
var app=http.createServer();
app.listen(8008);
app.on("request",(req,res)=>{
	var objUrl=url.parse(req.url,true);
	if(objUrl.pathname=="/" || objUrl.pathname=="/index"){
		fs.readFile("./public/zhuce.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(objUrl.pathname=="/username"){
		var conn= mysql.createConnection({
	  		host     : '127.0.0.1',
	  		user     : 'root',
	  		password : '',
	  		database : 'h52003'
		});	
			
		var sql="SELECT * FROM user";
		
		conn.query(sql, function (error, results) {
	  		res.end(JSON.stringify(results));
		});
		
		conn.end();
	}else if(objUrl.pathname=="/insert"){
		var arr=[];
		for(var i in objUrl.query){
			arr.push(objUrl.query[i]);
		}
		//[name,pwd,email]
		
		var conn= mysql.createConnection({
	  		host     : '127.0.0.1',
	  		user     : 'root',
	  		password : '',
	  		database : 'h52003'
		});	
			
		var sql=`INSERT INTO user VALUES(0,?,?,?)`;//?占位符
		
		conn.query(sql,arr, function (error, results) {
	  		console.log(results);
	  		res.end("<script>location='/'</script>")
		});
		conn.end();
	}else if(objUrl.pathname=="/select"){
		fs.readFile("./public/select.html",(err,buf)=>{
			res.end(buf);
		})
	}
})