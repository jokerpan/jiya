$(function(){
	var selected = $('nav ul li').filter('.nav-active');
	$('nav ul li').hover(function() {
		selected.removeClass('nav-active');
		$(this).addClass('nav-active');
	}, function() {
		selected.addClass('nav-active');
		$(this).removeClass('nav-active');
	});
})