;(function(){
	
	class Denglu{
			constructor(){
				this.url = "http://api.icodeilife.cn:81/user";
				this.user = $("#user");
				this.pass = $("#pass");
				this.btn = $("#btn");
				this.state = $(".l6 p span");
				let chk = document.getElementById("chk");
				this.user[0].value = getCookie("user");
				this.pass[0].value = getCookie("pass");
			
				this.addEvent();
			}
			addEvent(){
				this.btn.click(()=>{
					this.load();
				})
			}
			load(){
				$.ajax({
					url:this.url,
					data:{
						type:"login",
						user:this.user.val(),
						pass:this.pass.val(),
					},
					success:(res)=>{
						this.res = JSON.parse(res);
						console.log(res)
						if(this.res.code == 0){
							this.state.html("不存在此用户名,请<a href='zhuce.html'>注册</a>");
						}else if(this.res.code == 2 ){
							this.state.html("用户密码错误,请<a href='denglu.html'>重新登陆</a>");
						}else if(this.res.code == 1 && this.user.val() != "" && this.pass.val() != ""){
							this.setState()
							this.state.html("登陆成功，3秒后跳入<a href='index.html'>首页</a>");
							var that = this;
//							this.btn[0].onclick = function(){
//								if(chk.checked){
//									setCookie("user",that.user.val(),{
//										expires:7
//									})
//									setCookie("pass",that.pass.val(),{
//										expires:7
//									})
//								}
//							}
							setTimeout(()=>{
								location.href = "index.html";
							},3000);
						}
					}
				})

				
			}
			setState(){
				// 将当前登录成功后返回的用户信息作为登录成功的状态
				localStorage.setItem("loginUser",JSON.stringify(this.res.msg));
			}
		}
		new Denglu();
	
})();