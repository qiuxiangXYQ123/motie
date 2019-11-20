const express=require('express');
//引入连接池模块
//创建路由器对象
const pool=require('../pool.js');
//添加路由
var router=express.Router();



//注册接口
router.post("/api/v1/reg",(req,res)=>{
	var obj=req.body
	console.log(obj);
	pool.query("INSERT INTO qiuxiang SET ?",
		[obj],function(err,result){
			if(err) throw err;
			if(result.affectedRows>0){
				res.send("1")
			}else{
				res.send("0")	
			}
	})
});

//登录接口
router.get("/api/v1/login/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	pool.query("SELECT * FROM qiuxiang_user WHERE uname=? and upwd=?",
		[$uname,$upwd],function(err,result){
			if(err)throw err;
			if(result.length>0){
				res.send("1")
			}else{
				res.send("0")	
			}
	})
})

//查询所有用户
router.get("/api/v1/listall",(req,res)=>{
	pool.query("SELECT * FROM xz_user",function(err,result){
			if(err)throw err;
			if(result.length>0){
				res.send(result);
			}else{
				ree.send("查询失败");
			}
	})
});

//分页查询用户
router.get("/api/v1/list/:pon&:size",(req,res)=>{
	var $pon=req.params.pon
	var $size=req.params.size
	$size=parseInt($size);
	$pon=(parseInt($pon)-1)*$size
	pool.query("SELECT * FROM xz_user LIMIT ?,?",
		[$pon,$size],function(err,result){
			if(err)throw err;
			if(result.length>0){
				res.send(result);
			}else{
				ree.send("查询失败");
			}
	})
});

//条件查询
router.get("/api/v1/search/:uid",(req,res)=>{
	var $uid=req.params.uid;
	pool.query("SELECT * FROM xz_user WHERE uid=?",
		[$uid],function(err,result){
			if(err)throw err;
			if(result.length>0){
				res.send(result)
			}else {
				res.send("查询失败")	
			}
	})
});

//条件查询——————用户名
router.get("/api/v1/sear/:uname",(req,res)=>{
	var $uname=req.params.uname;
	pool.query("SELECT * FROM xz_user WHERE uname=?",
		[$uname],function(err,result){
			if(err)throw err;
			if(result.length>0){
				res.send("1")
			}else {
				res.send("0")	
			}
	})
});


//删除接口
router.delete("/api/v1/del/:uid",(req,res)=>{
	var $uid=req.params.uid;
	pool.query("DELETE FROM xz_user WHERE uid=?",
		[$uid],function(err,result){
			if(err)throw err;
			if(result.affectedRows>0){
				res.send("1");
			}else{
				res.send("0");
			}
		})
})


//修改接口
router.put("/api/v1/update",(req,res)=>{
	var obj=req.body;
	pool.query("UPDATE xz_user SET ? WHERE uid=?",
		[obj,obj.uid],function(err,result){
			if(err)throw err;
			if(result.affectedRows>0){
				res.send("1")
			}else{
				res.send("0")	
			}
	})

});

//导出路由器对象
module.exports=router;




