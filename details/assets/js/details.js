/*放大镜*/
$("#small").mousemove(function (e) {
			$("#move,#big").show();
			var x=e.pageX-$(this).offset().left-$("#move").width()/2;
			var y=e.pageY-$(this).offset().top-$("#move").height()/2;
			if (x<=0) {
				x=0;
			}else if(x>=$(this).width()-$("#move").width()){
				x=$(this).width()-$("#move").width()
			}
			if (y<=0) {
				y=0
			}else if(y>=$(this).height()-$("#move").height()){
				y=$(this).height()-$("#move").height()
			}
			$("#move").css({left:x+'px',top:y+"px"});
			var scale=$("#big>img").width()/$("#small>img").width();
			console.log(scale);
			$("#big>img").css({left:-x*scale,top:-y*scale});
		}).mouseout(function(){
			$("#move,#big").hide();
		})
		$("#dian li img").click(function(){
			$("#bigpic,#smallpic").attr("src",$(this).attr("src"));		
		})


