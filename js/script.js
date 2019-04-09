$(function(){
	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
				}, 800);
			return false;
		});
	});
});


$('.command[command] ul').anoSlide({
	items: 2,
	speed: 600,
	auto: 5000,
	prev: 'a.prev[data-prev]',
	next: 'a.next[data-next]',
	lazy: true,
	delay: 100
});
$('.partner-block[partner] ul').anoSlide({
	items: 4,
	speed: 600,
	auto: 5000,
//	prev: 'a.prev[data-prev]',
//	next: 'a.next[data-next]',
	lazy: false,
	delay: 100
});




$(function(){
	resizeWindow();
	$(window).resize(function() {
        resizeWindow();
    });
	window.onorientationchange = function() {
        resizeWindow();
    };
	function resizeWindow(){
		var w = $(window).width();
		if(w > 768) {
			$('ul.nav li.dropdown').hover(function() {
				$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
			}, 
			function() {
				$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
			});
		}
		console.log(w);
	}
});