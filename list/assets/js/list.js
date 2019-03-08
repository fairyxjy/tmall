/*瀑布流*/
window.onscroll=function(){
	var pua=document.getElementById("pua");

	var pu=pua.getElementsByTagName("ul");

	var dh=document.documentElement.offsetHeight;
	// console.log(dh);
	var ch=document.documentElement.clientHeight||document.body.offsetHeight||window.innerHeight;
	// console.log(ch);
	var sh=document.documentElement.scrollTop||document.body.scrollTop;
	// console.log(sh);
	if(dh<8000){
	if(sh>=dh-ch*2){
		Ajax("JSON").get("assets/js/list.php",function(msg){
			 	pua.appendChild(pu[msg].cloneNode(true));
		})
	}
	}
}
	