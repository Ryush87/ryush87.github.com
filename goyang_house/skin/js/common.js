//common funtion
function objShow(obj){
	obj.css('display','block');
}
function objHide(obj){
	obj.css('display','none');
}
function currentLnb(num){
	$('.lnb_1d > li').eq(num).addClass('actOn');
}
function currentSnb(num){
	$('.snb > li').eq(num).addClass('actOn');
}
function currentTab(num){
	$('.tabBox li').eq(num).addClass('actOn');
}
function changeTitle(){
	var siteName="고양시 공공주택 정보마당";
	var temp=$('.subPage_title h2').html();
	if(temp!=null){
		$('title').html(temp+" > "+siteName);
	}else{
		$('title').html(siteName);
	}
}
function changeLocation(){
	var currentLnb=$('.lnb_1d li.actOn a').html();
	var currentSnb=$('.subPage_title h2').html();
	$('#locationBox li').eq(1).html(currentLnb);
	$('#locationBox li').eq(2).html(currentSnb);
}
//calender
function setDatePick(obj){
	jQuery('.blt_calendar').click(function(){
		jQuery(this).parent().find('input').datepicker("show");
	});
	jQuery("#"+obj).datepicker({
		dateFormat:'yy-mm-dd',
		showAnimation:'slide',
		showOtherMonths:true,
		selectOtherMonths:true,
		changeYear:true,
		changeMonth:true,
		showButtonPanel:true
	});
}
//drawGarph
function drawGarph(){
	var totalNum=$('.poll_resultBox li').length;
	for(i=0;i<totalNum;i++){
		var tempVal=$('.poll_resultBox li').eq(i).find('.prNum').html();
		//$('.poll_resultBox li').eq(i).find('.pollBar').css('width',tempVal+'%');
		$('.poll_resultBox li').eq(i).find('.pollBar').animate({width:tempVal+'%'},2000,'swing');
	}
	
}
//pwPopup
function pwPopupShow(e){
	var sWidth=window.innerWidth;
	var sHeight=window.innerHeight;
	var oWidth=$('.pw_popupBox').width();
	var oHeight=$('.pw_popupBox').height();
	var divLeft=e.pageX;
	var divTop=e.pageY+oHeight+20;
	if(divLeft+oWidth>sWidth){
		divLeft-=oWidth;
	}
	if(divTop+oHeight>sHeight){
		divTop-=oHeight;
	}
	if(divLeft<0){
		divLeft=0;
	}
	if(divTop<0){
		divTop=0;
	}
	$('.pw_popupBox').css({
		'top':divTop,
		'left':divLeft
	}).show();
}

//jquery function
$(function($){
	//lnb UI s-----------------
	$('.lnb_1d > li > a').focus(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objShow($(this).parent().find('.lnb_2d'));
		$(this).parent().addClass('overOn');
	});
	$('.lnb_1d > li > a').hover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objShow($(this).parent().find('.lnb_2d'));
		$(this).parent().addClass('overOn');
	});
	$('#gnb').mouseover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
	});
	$('#mainBgArea').mouseover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
	});
	$('#subBgArea').mouseover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
	});
	$('#contents').mouseover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
	});
	//lnb UI e-----------------

	//select UI s-----------------
	// Common
	var select_root = $('div.select');
	var select_value = $('.myValue');
	var select_a = $('div.select>ul>li>a');
	var select_input = $('div.select>ul>li>input[type=radio]');
	var select_label = $('div.select>ul>li>label');
	
	// Radio Default Value
	$('div.myValue').each(function(){
		var default_value = $(this).next('.iList').find('input[checked]').next('label').text();
		$(this).append(default_value);
	});
	
	// Line
	select_value.bind('focusin',function(){$(this).addClass('outLine');});
	select_value.bind('focusout',function(){$(this).removeClass('outLine');});
	select_input.bind('focusin',function(){$(this).parents('div.select').children('div.myValue').addClass('outLine');});
	select_input.bind('focusout',function(){$(this).parents('div.select').children('div.myValue').removeClass('outLine');});
	
	// Show
	function show_option(){
		$(this).parents('div.select:first').toggleClass('open');
	}
	
	// Hover
	function i_hover(){
		$(this).parents('ul:first').children('li').removeClass('hover');
		$(this).parents('li:first').toggleClass('hover');
	}
	
	// Hide
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			t.parents('div.select:first').removeClass('open');
		}, 1);
	}
	
	// Set Input
	function set_label(){
		var v = $(this).next('label').text();
		$(this).parents('ul:first').prev('.myValue').text('').append(v);
		$(this).parents('ul:first').prev('.myValue').addClass('selected');
	}
	
	// Set Anchor
	function set_anchor(){
		var v = $(this).text();
		$(this).parents('ul:first').prev('.myValue').text('').append(v);
		$(this).parents('ul:first').prev('.myValue').addClass('selected');
	}

	// Anchor Focus Out
	$('*:not("div.select a")').focus(function(){
		$('.aList').parent('.select').removeClass('open');
	});
	
	select_value.click(show_option);
	select_root.find('ul').css('position','absolute');
	select_root.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open');});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	select_input.change(set_label).focus(set_label);
	select_label.hover(i_hover).click(hide_option);
	
	// Form Reset
	$('input[type="reset"], button[type="reset"]').click(function(){
		$(this).parents('form:first').find('.myValue').each(function(){
			var origin = $(this).next('ul:first').find('li:first label').text();
			$(this).text(origin).removeClass('selected');
		});
	});
	//select UI e-----------------

	//list UI s-----------------
	$('.tableSubject').hover(function(){
		$(this).parent().parent().addClass('actOn');
	},function(){
		$(this).parent().parent().removeClass('actOn');
	});
	//list UI e-----------------
	
	//slideList UI s-----------------
	$('.slideListBox .titleLine a').click(function(){
		var totalIndex=$('.slideListBody > li').length;
		var tempIndex=$('.slideListBody > li').index($(this).parent().parent().parent());
		for(i=0;i<totalIndex;i++){
			if(i!=tempIndex){
				$('.slideListBody > li').eq(i).removeClass('openLine');
				$('.slideListBody > li').eq(i).find('.tl_5 .fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
				$('.slideListBody > li').eq(i).find('.conLine').slideUp();
			}
		}
		$(this).parent().parent().next('.conLine').slideToggle("",function(){
			if($(this).parent().height()>50){
				$(this).parent().addClass('openLine');
				$(this).parent().find('.tl_5 .fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
			}else{
				$(this).parent().removeClass('openLine');
				$(this).parent().find('.tl_5 .fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
			}
		});
	});
	$('.slideListBox .titleLine').hover(function(){
		$(this).parent().addClass('actOn');
	},function(){
		$(this).parent().removeClass('actOn');
	});
	$('.slideListBox .slideCloseBtn').click(function(){
		$(this).parent().parent().parent().removeClass('openLine');
		$(this).parent().parent().parent().find('.tl_5 .fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		$(this).parent().parent().parent().find('.conLine').slideUp();
	});
	//slideList UI e-----------------
	
	//Btn Action  s-----------------
	$('.cardBtn').hover(function(){
		$(this).parent().find('h6').addClass('actOn');
	},function(){
		$(this).parent().find('h6').removeClass('actOn');
	});
	$('.goodsEditBtn').click(function(e){
		pwPopupShow(e);
	});
	$('#editBtn').click(function(e){
		pwPopupShow(e);
	});
	$('.popCloseBtn').click(function(){
		$(this).parent().parent().hide();
	});
	$('#market_online_list .mapBtn').click(function(){
		window.open("map_view.html","지도보기","width=770px,height=600px");
	});
	//goodsEditBtn UI e-----------------
	
});

//window load 
$(document).ready(function(){
	changeTitle();
});

