"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
	var Zhuce = function () {
		function Zhuce() {
			_classCallCheck(this, Zhuce);

			this.url = "http://api.icodeilife.cn:81/user";
			console.log(this.url);
			this.user = $("#user");
			this.pass = $("#pass");
			this.pass2 = $("#pass2");
			this.tel = $("#tel");
			this.email = $("#email");
			this.btn = $("#btn");
			this.state = $(".l6 p span");
			this.tck = $(".tck");
			this.yhonoff = this.mimaonoff = this.cfmmonoff = this.sjonoff = this.yjonoff = false;
			this.addEvent();
		}

		_createClass(Zhuce, [{
			key: "addEvent",
			value: function addEvent() {
				var that = this;
				$("#user").on("blur", function () {
					console.log(this.value);
					var re1 = /^([\u2E80-\u9FFF\d\w-_]{6,18})$/;
					if (re1.test(this.value)) {
						that.tck.hide();
						that.yhonoff = true;
						//						console.log(that.yhonoff)
					} else {

						that.tck.html("用户名只能包含数字、字母、下划线，长度为6～18位");
						that.tck.show();
						that.yhonoff = false;
					}
				});

				$("#pass").on("input", function () {
					var tsReg = /^[0-9a-zA-Z!@#$^]{6,18}$/;
					if (tsReg.test(this.value)) {
						that.tck.hide();
						that.mimaonoff = true;
					} else {
						that.tck.html("密码最低为6位！");
						that.tck.show();
						that.mimaonoff = false;
					}
					//					console.log(that.mimaonoff)
				});

				$("#pass2").on("blur", function () {
					if ($("#pass2")[0].value == $("#pass")[0].value) {
						that.tck.hide();
						that.cfmmonoff = true;
					} else {
						that.tck.html("两次密码输入不一致！");
						that.tck.show();
						that.cfmmonoff = false;
					}
					//					console.log(that.cfmmonoff)
				});

				$("#tel").on("blur", function () {

					var phone = /^1[3|4|5|7|8|9][0-9]{9}$/;
					if (phone.test(this.value)) {
						that.tck.hide();
						that.sjonoff = true;
						console.log(that.sjonoff);
					} else {
						that.tck.html("请输入正确的手机号码!");
						that.tck.show();
						that.sjonoff = false;
					}
				});

				$("#email").on("blur", function () {
					var reg = /^([\w_-]{3,12})@([\w]{2,9})\.([a-z]{2,5})$/;
					if (reg.test(this.value)) {
						that.tck.hide();
						that.yjonoff = true;
					} else {
						that.tck.html("邮箱格式不正确!");
						that.tck.show();
						that.yjonoff = false;
					}
					//					console.log(that.yjonoff)
				});

				$("#btn").on("click", function () {
					console.log(that.yhonoff && that.mimaonoff && that.cfmmonoff && that.sjonoff && that.yjonoff);

					if (that.yhonoff && that.mimaonoff && that.cfmmonoff && that.sjonoff && that.yjonoff) {
						that.load();
					} else {
						alert("有失败选框");
					}
				});
			}
		}, {
			key: "load",
			value: function load() {
				var _this = this;

				$.ajax({
					url: this.url,
					data: {
						type: "register",
						user: this.user.val(),
						pass: this.pass.val(),
						tel: this.tel.val(),
						email: this.email.val()
					},
					success: function success(res) {
						res = JSON.parse(res);
						if (res.code == 0) {
							_this.state.html("注册失败，请重新注册");
						} else if (res.code == 1) {
							//							this.state.html("注册成功，3秒后跳转到<a href='denglu.html'>登陆</a>")
							//							setTimeout(()=>{
							//								location.href = "denglu.html";
							//							},3000);
						}
					}
				});
			}
		}]);

		return Zhuce;
	}();

	new Zhuce();
})();