"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
	var Denglu = function () {
		function Denglu() {
			_classCallCheck(this, Denglu);

			this.url = "http://api.icodeilife.cn:81/user";
			this.user = $("#user");
			this.pass = $("#pass");
			this.btn = $("#btn");
			this.state = $(".l6 p span");
			var chk = document.getElementById("chk");
			this.user[0].value = getCookie("user");
			this.pass[0].value = getCookie("pass");

			this.addEvent();
		}

		_createClass(Denglu, [{
			key: "addEvent",
			value: function addEvent() {
				var _this = this;

				this.btn.click(function () {
					_this.load();
				});
			}
		}, {
			key: "load",
			value: function load() {
				var _this2 = this;

				$.ajax({
					url: this.url,
					data: {
						type: "login",
						user: this.user.val(),
						pass: this.pass.val()
					},
					success: function success(res) {
						_this2.res = JSON.parse(res);
						console.log(res);
						if (_this2.res.code == 0) {
							_this2.state.html("不存在此用户名,请<a href='zhuce.html'>注册</a>");
						} else if (_this2.res.code == 2) {
							_this2.state.html("用户密码错误,请<a href='denglu.html'>重新登陆</a>");
						} else if (_this2.res.code == 1 && _this2.user.val() != "" && _this2.pass.val() != "") {
							_this2.setState();
							_this2.state.html("登陆成功，3秒后跳入<a href='index.html'>首页</a>");
							var that = _this2;
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
							setTimeout(function () {
								location.href = "index.html";
							}, 3000);
						}
					}
				});
			}
		}, {
			key: "setState",
			value: function setState() {
				// 将当前登录成功后返回的用户信息作为登录成功的状态
				localStorage.setItem("loginUser", JSON.stringify(this.res.msg));
			}
		}]);

		return Denglu;
	}();

	new Denglu();
})();