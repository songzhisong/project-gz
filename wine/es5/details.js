"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {

	var oStr = document.getElementsByTagName("strong")[0]; //数量
	var btn = document.getElementById("left");
	var btnjia = document.getElementById("right");
	var price = document.querySelector(".price p");

	var btns = document.getElementById("btns");
	var num = parseFloat(oStr.innerHTML);
	var sum = parseFloat(price.innerHTML);
	var img1 = document.querySelectorAll(".box3 img");

	console.log(btns, '444444444444444');
	btn.onclick = function () {
		if (num <= 1) {
			alert('不能再少了，弟弟');
		} else {
			num--;
			oStr.innerHTML = num;
			price.innerHTML = sum * num;
			console.log('11111');
		}
	};
	btnjia.onclick = function () {
		num++;
		oStr.innerHTML = num;
		price.innerHTML = sum * num;
	};
	btns.onclick = function () {
		var box = { 'num': num, 'sum': sum };
		var box_str = JSON.stringify(box);
		console.log('jiarugouwuce');
		localStorage.setItem('goods', box_str);
	};

	//	放大镜

	var Magnifier = function () {
		function Magnifier() {
			_classCallCheck(this, Magnifier);

			this.sBox = document.querySelector(".s_box");
			this.sImg = this.sBox.children[0];
			this.bBox = document.querySelector(".b_box");
			this.bImg = this.bBox.children[0];

			this.addEvent();
		}

		_createClass(Magnifier, [{
			key: "addEvent",
			value: function addEvent() {
				var that = this;
				this.sBox.onmouseenter = function () {
					that.show();
				};
				this.sBox.onmouseleave = function () {
					that.hide();
				};
				this.sBox.onmousemove = function (eve) {
					var e = eve || window.event;
					that.move(e);
				};

				for (var i = 0; i < img1.length; i++) {
					var that = this;
					img1[i].onclick = function () {
						that.sImg.src = this.src;
						that.bImg.src = this.src;
					};
				}
			}
		}, {
			key: "show",
			value: function show() {
				this.bBox.style.display = "block";

				if (!this.span) {
					this.span = document.createElement("span");
					var w = this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth;
					var h = this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight;

					this.span.style.cssText = "width:" + w + "px;height:" + h + "px;background:rgba(200,200,200,0.2);position:absolute;left:0;top:0;";
					this.sBox.appendChild(this.span);
				}

				this.span.style.display = "block";
			}
		}, {
			key: "hide",
			value: function hide() {
				this.span.style.display = "none";
				this.bBox.style.display = "none";
			}
		}, {
			key: "move",
			value: function move(e) {
				var l = e.clientX - this.sBox.offsetLeft - this.span.offsetWidth / 2;
				var t = e.clientY - this.sBox.offsetTop - this.span.offsetHeight / 2;

				if (l < 0) l = 0;
				if (t < 0) t = 0;

				if (l > this.sBox.offsetWidth - this.span.offsetWidth) {
					l = this.sBox.offsetWidth - this.span.offsetWidth;
				}
				if (t > this.sBox.offsetHeight - this.span.offsetHeight) {
					t = this.sBox.offsetHeight - this.span.offsetHeight;
				}
				this.span.style.left = l + "px";
				this.span.style.top = t + "px";

				var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
				var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);

				this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
				this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
			}
		}]);

		return Magnifier;
	}();

	new Magnifier();
})();