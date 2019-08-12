;(function(){
	
		var oStr = document.getElementsByTagName("strong")[0]; //数量
		var btn = document.getElementById("left");
		var btnjia = document.getElementById("right");
		var price = document.querySelector(".price p");

		var btns = document.getElementById("btns");
		var num = parseFloat(oStr.innerHTML);
		var sum = parseFloat(price.innerHTML);
		var img1 = document.querySelectorAll(".box3 img");
		
		
		console.log(btns,'444444444444444')
		btn.onclick=function(){
			if(num <= 1) {
				alert('不能再少了，弟弟')
			} else {
				num--;
		        oStr.innerHTML = num
		        price.innerHTML = sum * num 
		        console.log('11111')
			}
	        
	    }
		btnjia.onclick = function() {
			num++;
			oStr.innerHTML = num
			price.innerHTML = sum * num
		}
		btns.onclick = function() {
			var box = {'num': num,'sum': sum}
			var box_str = JSON.stringify(box)
			console.log('jiarugouwuce')
			localStorage.setItem('goods',box_str)
		}

			
		class Xr{
			constructor(){
			  this.url = "http://localhost/1906/wine/data/goods.json";
			  this.a = location.search;
			  this.b = this.a.slice(1);
			  this.box1 = document.getElementById("details");
			  console.log(this.b)
			  this.load();
			}
			
			load(){
	            var that = this;
	            ajaxGet(this.url,function(res){
	                that.res = JSON.parse(res);
	                that.display();
	            })	
			}
			display(){
				var str = "";
				for(var i=0;i<this.res.length;i++){
					if(this.res[i].goodsId == this.b){
						str += `<div id="details" class="margin">
								<h3>
									<a href="index.html">首页</a>
									<s> > </s>
									<b>红葡萄酒</b>
									<s> > </s>
									<b>干红</b>
									<s> > </s>
									<b style="font-weight:700 ;">${this.res[i].name}</b>
								</h3>
								<div class="picture">
									<div class="pic-l">
										<div class="s_box">						
											<img src="${this.res[i].url}" class="img"/>
										</div>
										<div class="pic-t">
											
											<a href="##"><img src="images/left.png" class="l"/></a>
											
											<div class="box3">
												<img src="${this.res[i].url}"/>
												
											</div>
											
											<a href="##"><img src="images/right.png" class="r"/></a>
											
										</div>
										<div class="b_box">						
											<img src="${this.res[i].url}"/>
										</div>
									</div>
									<dl>
										<dt>
											<p>${this.res[i].name}</p>
											<b>${this.res[i].subtitle}</b>
										</dt>
										<dd class="ta"><img src="images/ta.png"/></dd>
										<dd class="grade">
											<b>商品评分：</b>
											<img src="images/wjx.png"/>
											<img src="images/wjx.png"/>
											<img src="images/wjx.png"/>
											<img src="images/wjx.png"/>
											<img src="images/wjx.png"/>
											<b>评论数:<span>0</span></b>
											<b>近期售出数	36</b>
										</dd>
										<dd class="price">
											<b>也买价：</b>
											<span>￥</span>
											<p>${this.res[i].price}</p>
										</dd>
										<dd class="join">
											<h3>
												配送城市:
												<select class="it">
													<option>上海市</option>
													<option>北京市</option>
													<option>芜湖市</option>
													<option>合肥市</option>
												</select>
												有货
											</h3>
											<h4>
												<b>选择数量:</b>
												<input type="button" id="left" value="-" />
												<strong >1</strong>
												<input type="button" id="right" value="+" />
											</h4>
											<a href="##"><input type="button" id="btns" value="加入购物车" /></a>
										</dd>
										<dd class="footer">
											该商品不支持礼品卡抵扣
											此商品不支持<a href="##">存酒库</a>
										</dd>
									</dl>
								</div>
								
							</div>`
					}
					this.box1.innerHTML = str;
				}
					this.sBox = document.querySelector(".s_box");
					this.sImg = this.sBox.children[0];
					this.bBox = document.querySelector(".b_box");
					this.bImg = this.bBox.children[0];
					this.addEvent();
			}
			addEvent(){
					var that = this;
					this.sBox.onmouseenter = function(){
						that.show()
					}
					this.sBox.onmouseleave = function(){
						that.hide()	
					}
					this.sBox.onmousemove = function(eve){
						var e = eve || window.event
						that.move(e);
					}
					
					for(var i=0;i<img1.length;i++){
						var that = this;
						img1[i].onclick = function(){
							that.sImg.src = this.src;
							that.bImg.src = this.src;
						}
					}
				}
			show(){
				this.bBox.style.display = "block";
				
				if(!this.span){
					this.span = document.createElement("span");
					var w = this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth;
					var h = this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight;
					
					this.span.style.cssText = `width:${w}px;height:${h}px;background:rgba(200,200,200,0.2);position:absolute;left:0;top:0;`;
					this.sBox.appendChild(this.span);
				}
				
				this.span.style.display = "block";
			}
			hide(){
				this.span.style.display = "none";
				this.bBox.style.display = "none";
			}
			move(e){
				var l = e.clientX - this.sBox.offsetLeft - this.span.offsetWidth/2;
				var t = e.clientY - this.sBox.offsetTop - this.span.offsetHeight/2;
				
				if(l < 0) l=0;
				if(t < 0) t=0;
				
				if(l > this.sBox.offsetWidth - this.span.offsetWidth){
					l = this.sBox.offsetWidth - this.span.offsetWidth
				}
				if(t > this.sBox.offsetHeight - this.span.offsetHeight){
					t = this.sBox.offsetHeight - this.span.offsetHeight
				}
				this.span.style.left = l + "px";
				this.span.style.top = t + "px";
				
				var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
				var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);
				
				this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
				this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
			}
		}
		
		new Xr;
})();
