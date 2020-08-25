const http=require("http");
const url=require("url");
const fs=require("fs");
var app=http.createServer();
app.listen(80);
app.on("request",(req,res)=>{
	var objUrl=url.parse(req.url,true);
	if(objUrl.pathname=="/" || objUrl.pathname=="/index"){
		fs.readFile("./public/index.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(objUrl.pathname=="/giveyou"){
		console.log(objUrl.query.name);
	}else if(objUrl.pathname=="/giveyou1"){
		console.log(objUrl.query.hide);
		var arr=[1,2,3,4,5];
		res.end(JSON.stringify(arr));
	}
})