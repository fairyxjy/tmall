/*遮罩层样式*/
$(function(){
	$(".xiewrap").css({
		width:$(document).width(),
		height:$(document).height(),
	})
	$("#btn").click(function(){
		$("#show").hide();
		$(".xiewrap").show();
	})
})

/*拖拽样式*/
		$(function(){
			// 拖拽
			$("#sh").mousedown(function(e){
				$(this).css("cursor","move");
				var x=e.pageX-$(this).offset().left;
				var y=e.pageY-$(this).offset().top;
				$(document).mousemove(function(en){
					var l=en.pageX-x;
					var t=en.pageY-y;
					if(l<=0){
						l=0
					}else if(l>=$(document).width()-$("#sh").width()-13){
						l=$(document).width()-$("#sh").width()-13;
					}
					if(t<=0){
						t=0
					}else if(t>=$(document).height()-$("#sh").height()-13){
						t=$(document).height()-$("#sh").height()-13;
					}
					$("#sh").css({left:l+'px',top:t+'px'})
				})

			})
			$(document).mouseup(function(){
				$(this).off("mousemove")
			})
		})