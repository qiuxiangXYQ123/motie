function code(){
    var arr="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZ7410852963XCVBNM";
    arr=arr.split("");
    
    // console.log(arr);
    var str="";
    for(var i=0;i<4;i++){
        var index=Math.floor(Math.random()*arr.length);
        str+=arr[index]+"  ";
    }
    codes.innerHTML=str;
}


(function(){
    var headnav=document.querySelectorAll(
        "#maxnav>ul>.headnav>a"
    );
    var zc=document.querySelector("#tankuang>section:last-child");
    var dl=document.querySelector("#tankuang>section:first-child");
    var tankuang=document.getElementById("tankuang");
    
    for(var i of headnav){
        i.onclick=function(){
            tankuang.style="display:block";
            if(this.innerHTML=="登录"){
                dl.style="display:block";
                zc.style="display:none";
            }else{
                zc.style="display:block";
                dl.style="display:none";
            }
        }
    }
})();
(function(){
    var x=document.querySelectorAll(
        "#tankuang>section>span"
    );
    for(var x1 of x){
        x1.onclick=function(){
            var tankuang=document.getElementById("tankuang");
            tankuang.style="display:none";
        }
    }
})();
function login(){
		var xhr=new	XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				var result=xhr.responseText;
				if(result==1){
					alert("登录成功")
				}else{
					alert("登录失败")
				}
			}
		}
		var $uname=d_uname.value;
        var $upwd=d_upwd.value;
        var $yz=d_yz.value;
        if(!$uname){
            alert("用户名不能为空");
            return;
        }else if(!$upwd){
            alert("密码不能为空");
            return;
        }else if(!$yz){
            alert("请输入验证码");
            return;
        }


		xhr.open("get",`/user/api/v1/login/${$uname}&${$upwd}`,true);
		xhr.send();
	}
