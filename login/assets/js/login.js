/*用户名验证*/

$(function(){
	$('.keys').focusin(function(){
		$(this).css("border","1px solid #00acac");
	})
	$('.keys1').blur(function(){
		$('.keys').css("border","1px solid #ccc");
		var avalue=$(this).val();
		console.log(avalue);
		$.post("assets/js/login.php",'un='+avalue,function(msg){
			console.log(msg);
			if(msg=='y'){
				$('.yz').html('√');
			}else{
				$('.yz').html('×');
			}
		})
	})
})

/*密码正则验证*/
$(function(){
	$('.wor').focusin(function(){
		$(this).css("border","1px solid #00acac");
	})
	$('.wor').blur(function(){
		$(this).css("border","1px solid #ccc");
	})
})

var mm=/^[0-9A-Za-z]{6,16}$/;	
$('.word').blur(function(){
	var v=$(this).val();
	console.log(v);	
	if(mm.test(v)){
			$('.he').html('√');
	}else{
			$('.he').html('×');
	}
	
})