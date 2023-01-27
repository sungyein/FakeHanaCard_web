
//slide
$(document).ready(function(){
    
  setInterval(function(){
      $('div.slidebanner ul').animate({
          left: "-100%"
      },1000,function(){
          $('div.slidebanner ul').append($('div.slidebanner ul li').eq(0));
          $('div.slidebanner ul').css("left",0);
      })
  },3000);


	/* Modal */
	$('.open-modal').click(function () {
		$('.menu-modal').fadeIn()
	})

	$('.close-modal').click(function () {
		$('.menu-modal').fadeOut()
	})


	//Modal-tabmenu
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


//activated nav 스크롤시 상단 내비 고정
$(function() {
		$(window).scroll(function(){
			var window = $(this).scrollTop();
			if (window) {
				$('#nav').addClass('fixed',1000);
			} else {
				$('#nav').removeClass('fixed',1000);
			}
		});
});