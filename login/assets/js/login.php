<?php
	$uname=$_POST['un'];
	$arr=["11","12","13","14","15","16","17"];
	if (in_array($uname,$arr)) {
		echo "y";
	}else{
		echo "n";
	}
?>