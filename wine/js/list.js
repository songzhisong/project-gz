;(function(){
	class List{
        constructor(){
            this.cont = document.querySelector(".ct");
            this.url = "http://localhost/1906/wine/data/goods.json";
            this.load();
            this.addEvent();
        }
        addEvent(){
            var that = this;
            this.cont.addEventListener("click",function(eve){
                if(eve.target.className == "btn"){
                    that.id = eve.target.parentNode.parentNode.parentNode.getAttribute("zxc");
                    that.setCookie();
                    console.log(that.id);
                }
            }) 	
        }
        setCookie(){
            this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
            if(this.goods.length == 0){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }else{
                var i = 0;
                var onoff = this.goods.some((val,index)=>{
                    i = index;
                    return val.id == this.id;
                })
                if(onoff){
                    this.goods[i].num++
                }else{
                    this.goods.push({
                        id:this.id,
                        num:1
                    })
                }
            }
            setCookie("goods",JSON.stringify(this.goods));
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
				this.res.forEach((val)=>{
					str += `<ul class="box" zxc="${val.goodsId}">
								<li>
								<a href="details.html?${val.goodsId}"><img src="${val.url}" alt=""></a>
						            <span>${val.name}</span>
						            <b>${val.subtitle}</b>
						            <h3>特卖价：<p>${val.price}</p></h3>
									<div class="box2">
						        		<em>发货地&nbsp;:&nbsp;&nbsp;<strong>${val.tip}</strong></em>
					        			<i class="btn">加入购物车</i>
									</div>
								</li>
			        		</ul>`
				            
				})
				
				this.cont.innerHTML = str;
			}
		}
		
	new List();
	
})();
