/*轮播图*/
$(function(){		
	var i=0;
	function sh(){
		$("#img li").eq(i).addClass("active").siblings().removeClass("active");
		$("#num li").eq(i).addClass("active_num").siblings().removeClass("active_num");
}

function run(){
	ss=setInterval(function(){
		i++;
		if (i==$("#img li").size()) {
			i=0;
		}
		sh();
	},1000);
}
run();
$("#num li").mouseover(function(){	
	clearInterval(ss);
	i=$(this).index();
	sh();
}).mouseout(function(){
	run();
})
})
/*选项卡*/
$(function(){
		$(".tab li").mouseover(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index=$(this).index();
		$(".boxx div").eq(index).addClass("show").siblings().removeClass("show");
			
			}).mouseout(function(){
				$(this).removeClass("active");
				$(".boxx div").eq($(this).index()).removeClass("show");
			})

			$(".boxx div").mouseover(function(){
				$(this).addClass("show").siblings("div").removeClass("show");
				$(".tab li").eq($(this).index()).addClass("active").siblings().removeClass("active");
			
			}).mouseout(function(){
				$(this).removeClass("show");
				$(".tab li").eq($(this).index()).removeClass("active");
			})

		})

/*定时器+选项卡*/
$(function(){ 
	function run(){	
		$('.shop21 li').toggleClass('title-show');
		$('.show-wrap a').toggleClass('cont-show');		
	}
	function feng(){
		jsq=setInterval(function(){
			run();
		},2000)
	}
	feng();
	$('.shop21 li').mouseover(function(){
		clearInterval(jsq);
		$(this).addClass("title-show").siblings("li").removeClass("title-show");
		var index=$(this).index();
		$(".show-wrap a").eq(index).addClass("cont-show").siblings().removeClass("cont-show");
	}).mouseout(function(){
		feng();
	})
	$('.show-wrap a').mouseover(function(){
		clearInterval(jsq);
	}).mouseout(function(){
		feng();
	})
})

/*楼层*/
$(window).scroll(function(){
	var top=$(document).scrollTop()||window.pageYOffset;
	console.log(top);
	if(top>=800){
		$(".mainu").css("height","420px");
	}else{
		$(".mainu").css("height","0px");
	}
})
$(".mainl").click(function(){
	var index=$(this).index();
	console.log($(".floor").eq(index).offset().top);
	var top=$(".floor").eq(index).offset().top;
	$("html").animate({scrollTop:top},500);
})
var gao=[];
$(".floor").each(function(){
	gao.push($(this).offset().top);
})
$(window).scroll(function(){
	var top=$(this).scrollTop();
	console.log(top);
	for(var i=0;i<gao.length;i++) {

		if (top>=gao[i] && top<gao[i+1]) {
			index=i;
			$(".mainl").eq(index).css("background","#ff0036").siblings().css("background","rgba(0,0,0,.6)");
		}else if(top>=gao[gao.length-1]){
			index=gao.length-1;
			$(".mainl").eq(index).css("background","#66ff99").siblings().css("background","rgba(0,0,0,.6)");
		}
	}
})
/*返回顶部*/
$(function(){
	$('#topp').click(function(){
		$('html').animate({scrollTop:'0px'},500);
	})
})
/*滚动监听*/
$(window).scroll(function(){
	var top=$(document).scrollTop()||window.pageYOffset;
	console.log(top);
	if(top>=700){
		$(".search2-wrap").css("height","50px");
	}else{
		$(".search2-wrap").css("height","0px");
	}
})