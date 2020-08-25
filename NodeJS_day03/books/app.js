const http=require("http");
const url=require("url");
const fs=require("fs");
const fz=require("./mysql");
var app=http.createServer();
app.listen(8008);
app.on("request",(req,res)=>{
	console.log(obj.query)
	var obj=url.parse(req.url,true);
	if(obj.pathname=="/" || obj.pathname=="/index"){
		fs.readFile("./public/html/index.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(obj.pathname.indexOf(".html")!=-1 || obj.pathname.indexOf(".css")!=-1 || obj.pathname.indexOf(".js")!=-1){
		fs.readFile(`./public${obj.pathname}`,(err,buf)=>{
			res.end(buf);
		})
	}else if(obj.pathname=="/getData" ){
		fz.getData(res);
	}else if(obj.pathname=="/insert" ){
		var arr=[];
		for(var i in obj.query){
			arr.push(obj.query[i]);
		}
		fz.insert(res,arr);
	}else if(obj.pathname=="/getid"){
		var arr=[obj.query.id];
		
		fz.getid(res,arr);
	}else if(obj.pathname=="/update"){
		var arr=[];
		for(var i in obj.query){
			arr.push(obj.query[i]);
		}
		arr.push(arr.shift());
		console.log(arr);
		
		fz.del(res,arr);
	}
})





