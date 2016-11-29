$(function(){

	/* GNB - web */
	/* 1Depth */
	$("header #gnb li.dep1 > a, #menu_form #gnb li.dep1 > a").click(function(){
		$(this).parent().addClass("on");
		$(this).next().slideDown(200);
		$(this).parent().siblings().find("ul").css("display","none");
		$(this).parent().siblings().removeClass("on");	
		
	}).focus(function(){
		$(this).click(); /* 위의 ("#header #gnb li.dep1 > a").click(function()}{}) 실행!! */
	});

	
	/* 2Depth */
	$("header #gnb li.dep1 ul li.dep2 a, menu_form #gnb li.dep1 ul li.dep2 a").click(function(){
		$(this).parent().addClass("on");
		$(this).parent().siblings().removeClass("on");
	}).focus(function(){
		$(this).click();
	});


	/* tab */
	
		

});