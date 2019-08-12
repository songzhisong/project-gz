"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
    var List = function () {
        function List() {
            _classCallCheck(this, List);

            this.cont = document.querySelector(".ct");
            this.url = "http://localhost/1906/wine/data/goods.json";
            this.load();
            this.addEvent();
        }

        _createClass(List, [{
            key: "addEvent",
            value: function addEvent() {
                var that = this;
                this.cont.addEventListener("click", function (eve) {
                    if (eve.target.className == "btn") {
                        that.id = eve.target.parentNode.parentNode.parentNode.getAttribute("zxc");
                        that.setCookie();
                        console.log(that.id);
                    }
                });
            }
        }, {
            key: "setCookie",
            value: function (_setCookie) {
                function setCookie() {
                    return _setCookie.apply(this, arguments);
                }

                setCookie.toString = function () {
                    return _setCookie.toString();
                };

                return setCookie;
            }(function () {
                var _this = this;

                this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
                if (this.goods.length == 0) {
                    this.goods.push({
                        id: this.id,
                        num: 1
                    });
                } else {
                    var i = 0;
                    var onoff = this.goods.some(function (val, index) {
                        i = index;
                        return val.id == _this.id;
                    });
                    if (onoff) {
                        this.goods[i].num++;
                    } else {
                        this.goods.push({
                            id: this.id,
                            num: 1
                        });
                    }
                }
                setCookie("goods", JSON.stringify(this.goods));
            })
        }, {
            key: "load",
            value: function load() {
                var that = this;
                ajaxGet(this.url, function (res) {
                    that.res = JSON.parse(res);
                    that.display();
                });
            }
        }, {
            key: "display",
            value: function display() {
                var str = "";
                this.res.forEach(function (val) {
                    str += "<ul class=\"box\" zxc=\"" + val.goodsId + "\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"details.html?" + val.goodsId + "\"><img src=\"" + val.url + "\" alt=\"\"></a>\n\t\t\t\t\t\t            <span>" + val.name + "</span>\n\t\t\t\t\t\t            <b>" + val.subtitle + "</b>\n\t\t\t\t\t\t            <h3>\u7279\u5356\u4EF7\uFF1A<p>" + val.price + "</p></h3>\n\t\t\t\t\t\t\t\t\t<div class=\"box2\">\n\t\t\t\t\t\t        \t\t<em>\u53D1\u8D27\u5730&nbsp;:&nbsp;&nbsp;<strong>" + val.tip + "</strong></em>\n\t\t\t\t\t        \t\t\t<i class=\"btn\">\u52A0\u5165\u8D2D\u7269\u8F66</i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t        \t\t</ul>";
                });

                this.cont.innerHTML = str;
            }
        }]);

        return List;
    }();

    new List();
})();