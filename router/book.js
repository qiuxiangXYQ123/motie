const express=require('express');
//引入连接池模块
//创建路由器对象
const pool=require('../pool.js');
//添加路由
var router=express.Router();

//条件查询书籍----类型/search/type=1
router.get("/search/:type",(req,res)=>{
	console.log(1);
	var $type=req.params.type;
	pool.query("SELECT * FROM qiuxiang_book WHERE type=? ",
		[$type],function(err,result){
			if(err)throw err;
			if(result.length>0){
				res.send(result)
			}else {
				res.send("查询失败")	
			}
	})
});

//条件查询书籍----字数
router.get("/books/search/:sum",(req,res)=>{
	var $sum=req.query.sum;
	pool.query("SELECT * FROM qiuxiang_book WHERE sum=? ",
		[$sum],function(err,result){
			if(err)throw err;
			if(result.length>0){
				res.send(result)
			}else {
				res.send("查询失败")	
			}
	})
});


//条件查询书籍----完结与否
router.get("/books/search/:end",(req,res)=>{
	var $end=req.query.end;
	pool.query("SELECT * FROM qiuxiang_book WHERE end=? ",
		[$end],function(err,result){
			if(err)throw err;
			if(result.length>0){
				res.send(result)
			}else {
				res.send("查询失败")	
			}
	})
});

//条件查询书籍---收费 VIP
router.get("/books/search/:vip",(req,res)=>{
	var $vip=req.query.vip;
	pool.query("SELECT * FROM qiuxiang_book WHERE vip=? ",
		[$vip],function(err,result){
			if(err)throw err;
			if(result.length>0){
				res.send(result)
			}else {
				res.send("查询失败")	
			}
	})
});





//导出路由器对象
module.exports=router;