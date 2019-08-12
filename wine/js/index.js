;(function(){

	function banner(){
		//	banner轮播
		$("#banner").banner({
	        items:$("#banner").find("img"),         //必传
	        list:true,
	        autoPlay:true,                          //可选，默认有自动播放
	        delayTime:6000,                         //可选，默认2000
	        moveTime:2000,                     		//可选，默认300
	        index:0,                                //可选，默认0
		})
	}
	banner();
	
	function cost(){
		$(".cost-r").find(".li-2").mouseenter(function(){
			$(this).hide().siblings(".te").show() 
		})
		
		$(".cost-r").find(".te").mouseleave(function(){
			$(".cost-r").find(".li-2").show().siblings(".te").hide();
		})
	}
	cost();
	
	function liqueur(){
		//	banner轮播
		$(".lur-b-c").banner({
	        items:$(".lur-b-c").find("img"),         //必传
	        list:true,
	        autoPlay:true,                          //可选，默认有自动播放
	        delayTime:4000,                         //可选，默认2000
	        moveTime:3000,                     		//可选，默认300
	        index:0,                                //可选，默认0
		})
	}
	
	liqueur();
	
	function fashion(){
		$(".fashion-r").find(".li-2").mouseenter(function(){
			$(this).hide().siblings(".te").show() 
		})
		
		$(".fashion-r").find(".te").mouseleave(function(){
			$(".fashion-r").find(".li-2").show().siblings(".te").hide();
		})
	}
	fashion();
	
	function wine(){
		//	banner轮播
		$(".wine-b-c").banner({
	        items:$(".wine-b-c").find("img"),         //必传
	        list:true,
	        autoPlay:true,                          //可选，默认有自动播放
	        delayTime:3000,                         //可选，默认2000
	        moveTime:1000,                     		//可选，默认300
	        index:0,                                //可选，默认0
		})
	}
	wine();
	
//	选项卡
	function tab(){
		var aspan = $(".xuan").find("span");;
		var aul = $(".xiang").find("ul");
		$(".xuan").on("mouseenter","span",function(){
			$(this).addClass("active").siblings("span").removeClass("active")
		})
		for(var i=0;i<aspan.length;i++){
			aspan[i].index = i;	
			aspan[i].onmouseover = function(){
				for(var j=0;j<aspan.length;j++){
					aul[j].style.cssText = "display:none";
				}
				aul[this.index].style.cssText = "display:block";
			}
		}
	}
	tab();
				var ul = $(".tabt").find("li");;
				var aul = $(".r-b").find("ul");
//				for(var i=0;i<ul.length;i++){
//					ul[i].index = i;	
//				ul[i].onmouseover = function(){
//					for(var j=0;j<ul.length;j++){
//						aul[j].style.cssText = "display:none;";
//					}
//					aul[this.index].style.cssText = "display:block;";
//				}
//			}
//				$.each(ul,function(){
//					ul.on("mouseenter",function(){
//						$(this).addClass("active").siblings("li").removeClass("active");
//
//					})
//				})
			function tabr(){
				$('.tabt li').each(function(index) {
					$(this).mouseover(function() {
						$('.tabt li.active').removeClass('active');
						$(this).addClass('active');
						$('#bt ul:eq('+index+')').show().siblings().hide();
					})
				})
			}
			tabr();
			
			function log(){
				var msg = localStorage.getItem("loginUser");
//					console.log(msg);
				if(msg){
					$(".top-l").hide();
					$(".top-ll").show();
					$(".top-ll").find("span").html(JSON.parse(msg).user);
				}else{
					$(".top-l").show();
					$(".top-ll").hide();
				}
				
				$(".top-ll").find(".tui").click(function(){
					localStorage.removeItem("loginUser");
					localStorage.clear();
					$(".top-l").show();
					$(".top-ll").hide();
				})
				
				$(".hd-r").find("b").on("click",function(){
				    if(msg){
				        location.href = "car.html";
				    }else{
				        if(confirm("购物车登录后才能有")){
				            location.href = "denglu.html";
				        }else{
				            location.href = "index.html";
				        }
				    }
				})
			}
			
			log();
			
			$('#floor').find("li").not(".db").click(function(){
        		 $('html').stop().animate({
           		 scrollTop:$('.f').eq($(this).index()).offset().top
	         	})
	    	})
			$('#floor').find(".db").click(function(){
        		 $('html').stop().animate({
           		 scrollTop:0
	         	})
	    	})
			
//			function ljz(){
//				var aimg = document.querySelectorAll("img");
//			    var arr = Array.from(aimg);
//			    var t;
//			
//			    onload = onscroll = function(){
//			        clearTimeout(t);
//			        t = setTimeout(function(){
//			            fn();
//			        },100)
//			    }
//			
//			    function fn(){
//			        var scrollT = document.documentElement.scrollTop;
//			        var clientH = document.documentElement.clientHeight;
//			        
//			        for(var i=0;i<arr.length;i++){
//			            if(arr[i].offsetTop - scrollT < clientH){
//			                arr[i].src = arr[i].getAttribute("ljz");
//			                arr.splice(i,1)
//			            }
//			        }
//			    }
//			}
//
//			ljz();
})();



