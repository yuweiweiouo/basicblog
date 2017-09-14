	$(".menu").eq(0).click(function(){
		$(".page").hide();
		$(".-home").show();
	});

	$(".menu").eq(1).click(function(){
		$(".page").hide();
		$(".-album").show();
	});

	$(".menu").eq(2).click(function(){
		$(".page").hide();
		$(".-about").show();
	});