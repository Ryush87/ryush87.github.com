//common funtion
function objShow(obj){
	obj.css('display','block');
}
function objHide(obj){
	obj.css('display','none');
}
function currentTab(num){
	$('.tabBox li').eq(num).addClass('actOn');
}
function actTabPage(tab2_index,tab_index){
	objHide($('#p_charter .tabConBox'));
	objShow($('#p_charter #chtr_'+tab2_index+'_'+tab_index));
	$('.tabBox li').removeClass('actOn');
	if(tab2_index==1){
		$('#chtr_1 .tabBox li').eq(tab_index-1).addClass('actOn');
	}else{
		$('#chtr_2 .tabBox li').eq(tab_index-1).addClass('actOn');
	}
	$('.tabBox li').eq(tab_index-1).addClass('actOn');
}
function actTab2Page(tab2_index){
	objHide($('#p_charter .tab2ConBox'));
	objShow($('#p_charter #chtr_'+tab2_index));
	actTabPage(tab2_index,1)
	$('.tabBox2 li').removeClass('actOn');
	$('.tabBox2 li').eq(tab2_index-1).addClass('actOn');
}
function changeTitle(){
	var siteName="고양시 상하수도사업소";
	var temp=$('.subPage_title h2').html();
	if(temp!=null){
		$('title').html(temp+" > "+siteName);
	}else{
		$('title').html(siteName);
	}
}
function changeSubtitle(txt){
	$('.subPage_title h2').html(txt);
}
function changeLocation(lnb_1d,snb_1d,snb_2d){
	//var currentLnb=$('.lnb_1d > li.actOn > a').html();
	var currentLnb=$('.snbTitle').html();
	var currentSnb1=$('.snb_1d > li.actOn > a').html();
	var currentSnb2=$('.snb_2d > li.actOn > a').html();
	if(lnb_1d!=undefined){
		$('#locationBox').append('<li>'+currentLnb+'</li>');
		if(snb_1d!=undefined){
			$('.subPage_title h2').html(currentSnb1);
			$('#locationBox').append('<li>'+currentSnb1+'</li>');
			if(snb_2d!=undefined){
				$('.subPage_title h2').html(currentSnb2);
				$('#locationBox').append('<li>'+currentSnb2+'</li>');
			}
		}
	}
}
function currentLocation(lnb_1d,snb_1d,snb_2d){
	if(lnb_1d!=undefined){
		$('.lnb_1d > li').eq(lnb_1d).addClass('actOn');
	}
	if(snb_1d!=undefined){
		$('.snb_1d > li').eq(snb_1d).addClass('actOn');
		$('.snb_1d > li').eq(snb_1d).find('.snb_2d').slideDown();
	}
	if(snb_2d!=undefined){
		$('.snb_1d > li.actOn >.snb_2d > li').eq(snb_2d).addClass('actOn');
	}
	changeLocation(lnb_1d,snb_1d,snb_2d);
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

/* divPopup */
function showObj(obj){
	$(obj).css("display","block");
}
function hideObj(obj){
	$(obj).css("display","none");
}
function divPopBg_show(){
	showObj(".divPopupBg");
}
function divPopBg_hide(){
	hideObj(".divPopupBg");
}
function positionPop(obj){
	var tempW="-"+$(obj).width()/2+"px";
	var tempH="-"+$(obj).height()/2+"px";
	$(obj).css({"margin-top":tempH,"margin-left":tempW});
}
function callPopup(obj){
	positionPop(obj);
	divPopBg_show();
	showObj(obj);
}
function hidePopup(obj){
	divPopBg_hide();
	hideObj(obj);
}

//jquery function
$(function($){
	//lnb UI s-----------------
	$('.lnb_1d > li > a').focus(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objShow($('.lnb_2d'));
		objShow($('#lnb_2d_bg'));
		$(this).parent().addClass('overOn');
	});
	$('.lnb_1d > li > a').hover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objShow($('.lnb_2d'));
		objShow($('#lnb_2d_bg'));
		$(this).parent().addClass('overOn');
	});
	$('.lnb_2d li > a').hover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		
		$(this).parent().parent().parent().parent().addClass('overOn');
	});
	$('#tnb').mouseover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objHide($('#lnb_2d_bg'));
	});
	$('#mainBgArea').mouseover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objHide($('#lnb_2d_bg'));
	});
	$('#subBgArea').mouseover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objHide($('#lnb_2d_bg'));
	});
	$('#contents').mouseover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objHide($('#lnb_2d_bg'));
	});
	$('.subPage').mouseover(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		objHide($('#lnb_2d_bg'));
	});
	//lnb UI e-----------------

	//snb UI s-----------------
	$('.snb_1d > li > a').click(function(){
		var totalIndex=$('.snb_1d > li').length;
		var tempIndex=$('.snb_1d > li').index($(this).parent());
		for(i=0;i<totalIndex;i++){
			if(i!=tempIndex){
				$('.snb_1d > li').eq(i).removeClass('openLi');
				$('.snb_1d > li').eq(i).find('a .fa').removeClass('fa-caret-up').addClass('fa-caret-down');
				$('.snb_1d > li').eq(i).find('.snb_2d').slideUp();
			}
		}
		$(this).next('.snb_2d').slideToggle("",function(){
			if($(this).parent().height()>50){
				$(this).parent().addClass('openLi');
				$(this).parent().find('a .fa').removeClass('fa-caret-down').addClass('fa-caret-up');
			}else{
				$(this).parent().removeClass('openLi');
				$(this).parent().find('a .fa').removeClass('fa-caret-up').addClass('fa-caret-down');
			}
		});
	});
	//snb UI e-----------------

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
	$('.listSubject').hover(function(){
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
				$('.slideListBody > li').eq(i).find('a.slideBtn').removeClass('slideUpBtn').addClass('slideDownBtn');
				$('.slideListBody > li').eq(i).find('.conLine').slideUp();
			}
		}
		$(this).parent().parent().next('.conLine').slideToggle("",function(){
			if($(this).parent().height()>50){
				$(this).parent().addClass('openLine');
				$(this).parent().find('a.slideBtn').removeClass('slideDownBtn').addClass('slideUpBtn');
			}else{
				$(this).parent().removeClass('openLine');
				$(this).parent().find('a.slideBtn').removeClass('slideUpBtn').addClass('slideDownBtn');
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
		$(this).parent().parent().parent().find('a.slideBtn').removeClass('slideUpBtn').addClass('slideDownBtn');
		$(this).parent().parent().parent().find('.conLine').slideUp();
	});
	//slideList UI e-----------------
	
	//BtnAction  s-----------------
	//main feeGuideBox
	var fgbIndex=0;
	$('.fgbCon li').hover(function(){
		$('.fgbCon li').removeClass('actOn');
		$(this).addClass('actOn');
		fgbIndex=$('.fgbCon li').index($(this));
	},function(){
		$(this).removeClass('actOn');
	});
	$('.feeGuideBox').hover(function(){
		
	},function(){
		$('.fgbCon li').eq(fgbIndex).addClass('actOn');
	});
	//sub charter
	$('#p_charter .tabBox2 li a').click(function(){
		var tab2_index=$('#p_charter .tabBox2 li').index($(this).parent())+1;
		actTab2Page(tab2_index);
	});
	$('#p_charter .tabBox li a').click(function(){
		var tab2_index=$('#p_charter .tab2ConBox').index($(this).parent().parent().parent())+1;
		if(tab2_index==1){
			var tab_index=$('#chtr_1 .tabBox li').index($(this).parent())+1;
		}else{
			var tab_index=$('#chtr_2 .tabBox li').index($(this).parent())+1;
		}
		actTabPage(tab2_index,tab_index);
	});
	//popDivBox
	$(".divPopupBox .closePopBtn").click(function(){
		hidePopup($(this).parent().parent().parent());
	});
	//BtnAction UI e-----------------
	
});

//window load 
$(document).ready(function(){
	changeTitle();
});

