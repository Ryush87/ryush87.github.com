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
	$('.tabView').eq(num).addClass('actOn');
}
function changeTab(num){
	$('.tabBox li').removeClass('actOn');
	$('.tabView').removeClass('actOn');
	$('.tabBox li').eq(num).addClass('actOn');
	$('.tabView').eq(num).addClass('actOn');
}
function resize_evt(){
	var win_w=$(window).width();
	if (win_w >= 769){
		$('#lnb').addClass('lnb');
		$('#lnb').removeClass('mobileLnb');
	} else if (win_w < 769){
		$('#lnb').removeClass('lnb');
		$('#lnb').addClass('mobileLnb');
		$('#header').stop().animate({backgroundColor:"rgba(0,0,0,0.7)"},100);
	}
}
function changeTitle(){
	var siteName="세움주택건설";
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
function headerRefresh(){
	var hdr=$('#header');
	var hdrHeight=hdr.height();
	if($(window).scrollTop()>=hdrHeight){
		hdr.stop().animate({backgroundColor:"rgba(0,0,0,0.7)"},100);
	}else{
		if($('#lnb').attr('class')!='mobileLnb'){
			hdr.stop().animate({backgroundColor:"transparent"},50);
		}
	}
}
function currentSnb(obj){
	$('.snb li').removeClass('actOn');
	$('.snb li').eq(obj).addClass('actOn');
}
function chk_snb(){
	var win = $(window);
	var win_w = win.width();
	var win_h = win.height();
	var win_top = win.scrollTop();
	var snbBox = $('.snbBox');
	var win_bottom = (win_top + win_h);

	$.each(snbBox, function(){
		var elem = $(this);
		var elem_h = elem.outerHeight();
		var elem_top = elem.offset().top;
		var elem_bottom = (elem_top + elem_h);

		if ((elem_bottom >= win_top) && (elem_top <= (win_bottom-600))){
			currentSnb($('.snbBox').index(elem));
		}
		else{
		}
	});
}
//fade effect
function chk_view(){
	var win = $(window);
	var win_w = win.width();
	var win_h = win.height();
	var win_top = win.scrollTop();
	var fadeEff = $('.fadeEff');
	var win_bottom = (win_top + win_h);

	$.each(fadeEff, function(){
		var elem = $(this);
		var elem_h = elem.outerHeight();
		var elem_top = elem.offset().top;
		var elem_bottom = (elem_top + elem_h);

		if ((elem_bottom >= win_top) && (elem_top <= win_bottom)){
			elem.addClass('in-view');
		}
		else{
			elem.removeClass('in-view');
		}
	});
}

//jquery function
$(function($){
	//header s-----------------
	$(window).scroll(function(){
		headerRefresh();
		chk_view();
		chk_snb();
	});
	//header e-----------------

	//lnb UI s-----------------
	$('.lnb_1d > li > a').click(function(){
		$('.lnb_1d > li').removeClass('overOn');
		objHide($('.lnb_2d'));
		$(this).parent().find('.lnb_2d').slideDown();
		$(this).parent().addClass('overOn');
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

	//snb UI s-----------------
	$('.snb_1d > li > a').click(function(){
		var totalIndex=$('.snb_1d > li').length;
		var tempIndex=$('.snb_1d > li').index($(this).parent());
		for(i=0;i<totalIndex;i++){
			if(i!=tempIndex){
				$('.snb_1d > li').eq(i).removeClass('openLi');
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

	//scroll s-----------------
	function scrollMove(obj){
		var tempPosition=$(obj).offset().top-90;
		$('html, body').stop().animate({scrollTop:tempPosition},1000);
		return false;
	}
	$('.scrollSnb a').click(function(event){
		event.preventDefault();
		var tempObj=$(this).attr('href');
		scrollMove(tempObj);
	});
	//scroll e-----------------
	
	//BtnAction  s-----------------
	$('#mMenu').click(function(){
		$('.mobileLnb .lnb_1d').slideToggle();
	});
	$('#mcGallery li a').hover(function(){
		var tempHtml="<div class='mcOver'>VIEW DETAIL+</div>"
		$(this).find('.mcgPic').append(tempHtml);
		$(this).find('.mcOver').css('line-height',($(this).find('.mcgPic img').height())+'px');
	},function(){
		$(this).find('.mcOver').remove();
	});
	$('#mcStory li a').hover(function(){
		var tempHtml="<div class='mcOver'>VIEW DETAIL+</div>"
		$(this).find('.mcsPic').append(tempHtml);
		$(this).find('.mcOver').css('line-height',($(this).find('.mcsPic img').height())+'px');
	},function(){
		$(this).find('.mcOver').remove();
	});
	$('#mcFeature li a').hover(function(){
		objHide($(this).find('.mcfQ'));
		objShow($(this).find('.mcfA'));
	},function(){
		objHide($(this).find('.mcfA'));
		objShow($(this).find('.mcfQ'));
	});
	$('.tabBox li a').click(function(){
		var tempNum=$('.tabBox li').index($(this).parents('li'));
		changeTab(tempNum);
	});
	//BtnAction e-----------------
	
});

//window load 
$(document).ready(function(){
	changeTitle();
	headerRefresh();
	chk_view();
	resize_evt();
	
});
$(window).resize(function(){
	resize_evt();
});
