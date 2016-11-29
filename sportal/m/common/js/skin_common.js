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
//calender
function setDatePick(obj){
	jQuery('.fa-calendar').click(function(){
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
function setBtnfun(){
	//backMoveBtn
	$(".backMoveBtn").click(function(){
		history.back();
	});
	//provision
	$(".divPopupBox .closePopBtn").click(function(){
		hidePopup($(this).parent().parent().parent().parent());
	});
	//id_find tab
	$(".idpwFindBox .tabTitle").click(function(){
		var actOn="btnTcFFF pointC1Bg pointC1Border";
		var actOff="clr7B bgColor_g1 borderColor_g1";
		$(".tabTitle").removeClass(actOn).addClass(actOff);
		$(this).removeClass(actOff).addClass(actOn);
		var tempObj="#tabContent"+($('.tabBox li').index($(this).parent())+1);
		hideObj('.tabContent');
		showObj(tempObj);
	});
	//toggle
	$('#toggleDetail').click(function(){
		$('#searchDetailBox').slideToggle();
		if($('#searchDetailBox').height()>10){
			$(this).find('i').removeClass('fa-angle-up');
			$(this).find('i').addClass('fa-angle-down');
		}else{
			$(this).find('i').removeClass('fa-angle-down');
			$(this).find('i').addClass('fa-angle-up');
		}
	});
	$('.toggleListBox li .tListTitle').click(function(){
		var obj=$(this).parent().find('.tListCon');
		$(obj).slideToggle();
		if($(obj).height()>10){
			$(this).find('i').removeClass('fa-angle-down');
			$(this).find('i').addClass('fa-angle-right');
		}else{
			$(this).find('i').removeClass('fa-angle-right');
			$(this).find('i').addClass('fa-angle-down');
		}
	});
	$('.toggleBtn').click(function(){
		var obj=$(this).parent().parent().find('.toggleContents');
		$(obj).slideToggle();
		if($(obj).height()>10){
			$(this).html("열기<i class='fa fa-angle-down'></i>");
		}else{
			$(this).html("닫기<i class='fa fa-angle-up'></i>");
		}
	});
}

/* document.ready */
$(document).ready(function(){
	setBtnfun();
});
