"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
	var Car = function () {
		function Car() {
			_classCallCheck(this, Car);

			this.tbody = document.querySelector("tbody");
			this.url = "http://localhost/1906/wine/data/goods.json";
			this.load();
			this.addEvent();
			this.btnn = document.querySelector("#btnn");
		}

		_createClass(Car, [{
			key: "addEvent",
			value: function addEvent() {
				var that = this;
				this.tbody.addEventListener("click", function (eve) {
					if (eve.target.className == "del") {
						that.id = eve.target.parentNode.getAttribute("index");
						eve.target.parentNode.remove();
						that.changeCookie(function (i) {
							that.goods.splice(i, 1);
						});
					}
				});
				this.tbody.addEventListener("input", function (eve) {
					if (eve.target.className == "num") {
						that.id = eve.target.parentNode.parentNode.getAttribute("index");
						that.changeCookie(function (i) {
							that.goods[i].num = eve.target.value;
						});
					}
				});
			}
		}, {
			key: "changeCookie",
			value: function changeCookie(callback) {
				var _this = this;

				var i = 0;
				this.goods.some(function (val, index) {
					i = index;
					return val.id = _this.id;
				});
				callback(i);
				setCookie("goods", JSON.stringify(this.goods));
			}
		}, {
			key: "load",
			value: function load() {
				var that = this;
				ajaxGet(this.url, function (res) {
					that.res = JSON.parse(res);
					that.getCookie();
				});
			}
		}, {
			key: "getCookie",
			value: function (_getCookie) {
				function getCookie() {
					return _getCookie.apply(this, arguments);
				}

				getCookie.toString = function () {
					return _getCookie.toString();
				};

				return getCookie;
			}(function () {
				this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
				this.display();

				var that = this;
				$("#btnn").on("click", function () {
					that.display();
				});
			})
		}, {
			key: "display",
			value: function display() {
				var _this2 = this;

				var str = "";
				var cont = 0;
				var sum1 = "";
				this.res.forEach(function (resVal) {
					_this2.goods.forEach(function (goodsVal) {
						sum1 = resVal.price * goodsVal.num;
						if (resVal.goodsId == goodsVal.id) {
							str += " <tr index=\"" + resVal.goodsId + "\">\n\t\t\t\t\t                <td><img src=\"" + resVal.url + "\"></td>\n\t\t\t\t\t                <td>" + resVal.name + "</td>\n\t\t\t\t\t                <td><s style=\"color:red;\">\uFFE5<s><b>" + resVal.price + "</b></td>\n\t\t\t\t\t                <td><input class=\"num\" type=\"number\" value=\"" + goodsVal.num + "\" min=1></td>\n\t\t\t\t\t                <td class=\"del\">\u5220\u9664\u8BE5\u5546\u54C1</td>\n\t           \t\t\t\t\t </tr>";
							cont += sum1;
						}
					});
				});
				this.tbody.innerHTML = str;
				$(".jg").html(cont);
			}
		}]);

		return Car;
	}();

	new Car();
})();