$(document).ready(function(){
	var win = $(window),
		win_w = win.width(),
		win_h = win.height(),
		win_top = win.scrollTop(),
		
		$fadeEff = $('.fadeEff');

	function chk_view(){ //fade effect
		var win_bottom = (win_top + win_h);

		$.each($fadeEff, function(){
			var $elem = $(this),
				$elem_h = $elem.outerHeight(),
				$elem_top = $elem.offset().top,
				$elem_bottom = ($elem_top + $elem_h);

			if (($elem_bottom >= win_top) && ($elem_top <= win_bottom)){
				$elem.addClass('in-view');
			}
			/*else{
				$elem.removeClass('in-view');
			}*/
		});
	}
	win.on('scroll resize', chk_view);
	win.trigger('scroll');

	chk_view()
	hd_fixed()
	resize_evt()


	var $gnb = $('.gnb-wrap'),
		$gnbTop = $gnb.offset().top,
		$menu = $('.gnb > li'),
		$sub = $('.gnb .sub'),
		$subBg = $('.sub-bg'),
		$visual_h = $('.main-visual').height() / 2,
		$quick = $('.quick');

	function hd_fixed(){ //header 고정
		if (win_top > $gnbTop || win_top != 0){
			$('#header').addClass('fixed');
		}
		else {
			$('#header').removeClass('fixed');
		}
	}

	$menu.on('mouseover focusin',function(){ //PC GNB
		if ($('#gnb').hasClass('m-gnb')) return false;
		$sub.stop().fadeIn();
		$subBg.stop().fadeIn();

		$gnb.on('mouseleave',function(){
			hideSub();
		});
		$menu.find(':last-child li:last-child a').on('blur',function(){
			hideSub();
		});

		function hideSub(){
			$sub.stop().fadeOut();
			$subBg.stop().fadeOut();
		}
	});

	$('#header .btn-menu').on('click',function(){
		var flag = $('.m-wrap').hasClass('open');
		if (flag){
			closed();
		} else{
			opened();
		}

		$gnb.find('.btn-close').on('click',function(){
			closed();
		});
		$('.m-wrap').on('click',function(){
			closed();
		});
	});
	
	$('#header .btn-prev').on('click',function(){
		history.back();
	});

	function opened(){
		$('.m-wrap').addClass('open');
		$('body').css('overflow-y','hidden');
	}  

	function closed(){
		$('.m-wrap').removeClass('open');
		$('body').css('overflow-y','auto');
	}

	var actived;
	$('.m-gnb > li > a').on('click',function(e){ //모바일 GNB
		var event = e || window.event;
		e.preventDefault();

		var $menu = $(this).parent();

		if ($menu.hasClass('on')){
			deactive($menu);
			return;
		} if (actived){
			deactive(actived);
		}
		active($menu);
	});

	function active(item) {
		item.addClass('on');
		item.find('.sub').slideDown(300);
		actived = item;
	}

	function deactive(item) {
		item.removeClass('on');
		item.find('.sub').slideUp(300);
	}

	/*$('.depth2 a').on('click',function(){
		closed();
		$('body,html').animate({scrollTop:$(this.hash).offset().top-163},500)
	});*/

	function resize_evt(){
		if (win_w >= 768){
			$('#gnb').attr('class','gnb');
		} else if (win_w < 768){
			$('#gnb').attr('class','m-gnb');
		}

		var $mask = $('.nadri-store li').width();
		$('.nadri-store .mask').css('width', $mask+'px');
	}

	$(window).on('scroll',function(){
		win_top = win.scrollTop();
		hd_fixed();

		//퀵메뉴 노출
		if (win_top > $visual_h){
			$quick.stop().fadeIn(200);
		} else{
			$quick.stop().fadeOut(200);
		}
	});
 
	$(window).on('resize',function(){
		win_w = win.width();
		resize_evt()
		slides()
	});


	//나드리 메뉴
	$('.nadri-menu li').on('mouseover focusin',function(){
		$(this).addClass('on');
	}).on('mouseleave blur',function(){
		$(this).removeClass('on');
	});

	//퀵메뉴
	$('.quick .ico').on('mouseover focusin',function(){
		$(this).siblings('.tooltip').stop().fadeIn();
	}).on('mouseleave blur',function(){
		$(this).siblings('.tooltip').stop().fadeOut();
	});
	$('.btn-top').on('click',function(){
		$('body,html').animate({scrollTop:0});
		return false;
	});

	//placeholder
	var $inpBx = $('.inpBx input');
	$inpBx.on('keydown',function(){
		$(this).siblings('label').hide();
	}).on('blur',function(){
		$this = $(this);
		if ($.trim($this.val()).length===0){
			$this.siblings('label').show();
		}
	});

	//셀렉트박스
	var $selBx = $('.selBx select');
	$selBx.change(function(){
		var $selVal = $(this).children('option:selected').text();
		$(this).siblings('label').text($selVal);
	});


	//bxSlider
	$('.main-visual ul').bxSlider({
		auto: true
	});

	$('.nadri-menu ul').bxSlider({
		infiniteLoop: false,
		hideControlOnEnd: true,
		pager: false,
		minSlides: 1,
		maxSlides: 4,
		moveSlides: 1,
		slideWidth: 296
	});

	$('.view-list ul').bxSlider({
		slideMargin:9,
		infiniteLoop:false,
		hideControlOnEnd:true,
		pager:false,
		minSlides:1,
		maxSlides:5,
		moveSlides:1,
		slideWidth:200
	});

	var $media = $('.nadri-media ul').bxSlider(),
		$store = $('.nadri-store ul').bxSlider();

	$viewport = function(){
		var colNum = 3;

		if (win_w < 768 && win_w >= 480){
			colNum = 2;
		} 
		else if (win_w < 480){
			colNum = 1;
		}
		return colNum;
	}
	slides = function(){
		$store.reloadSlider({
			pager: false,
			auto: true,
			autoHover: true,
			minSlides: $viewport(),
			maxSlides: $viewport(),
			moveSlides: 1,
			slideWidth: 640
		});
		
		if (win_w >= 768){
			$('.nadri-store .bx-prev').wrap('<span class="mask prev"></span>');
			$('.nadri-store .bx-next').wrap('<span class="mask next"></span>');
		}
		if (win_w >= 480){
			$media.reloadSlider({
				mode:'vertical',
				infiniteLoop:false,
				pager:false,
				minSlides:2,
				moveSlides:1
			});
		} else if (win_w < 480){
			$media.reloadSlider({
				mode:'horizontal',
				infiniteLoop:false,
				pager:false,
				moveSlides:1
			});
		}
	}
	slides()
});