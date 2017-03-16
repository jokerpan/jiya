$(function(){
	/*$('.service-body>li').hover(function() {
		$(this).children('button').removeClass('btn-default');
		$(this).children('button').addClass('btn-primary');
	}, function() {
		$(this).children('button').removeClass('btn-primary');
		$(this).children('button').addClass('btn-default');
	});*/

	$('.service-body>li>button').click(function(event) {
		var old = $('.service-body>li button').filter('.btn-primary');
		var num = $(this).parents('.float-left').index();
		var oldnum = old.parents('.float-left').index();
		old.removeClass('btn-primary');
		old.addClass('btn-default');
		$(this).addClass('btn-primary');
		$('.img'+(oldnum+1)).hide();
		$('.img'+(num+1)).show();
	});


	$('.service-img li').hover(function() {
		$(this).children('div').show();
	}, function() {
		$(this).children('div').hide();
	});

	$('.contact li:eq(1)').hover(function() {
		$('.qrcode').css('top', ($(window).height()*0.4+76)+'px');
		$('.qrcode').show();
	}, function() {
		$('.qrcode').hide();
	});

	$('.contact li:eq(0)').hover(function() {
		$(this).children('ul').show();
	}, function() {
		$(this).children('ul').show();
	});

	$('#myModal').on('show.bs.modal', function(event) {
		var button = $(event.relatedTarget);
		var num1 = button.parents('.float-left').index();
        var num2 = button.parents('li').index();
        var message2 = new Array();
		message2[0] = new Array('aaaaaaaaaaa','bbbbbbbbbbb');
		message2[1] = new Array('aaaaaaaaaaa','bbbbbbbbbbb');
		message2[2] = new Array('aaaaaaaaaaa','bbbbbbbbbbb');
		message2[3] = new Array('aaaaaaaaaaa','bbbbbbbbbbb');
		var title = button.text();
		var modal = $(this);
		modal.find('.modal-title').text(title);
		modal.find('.modal-body').text(message2[num1][num2]);
		modal.find('.modal-body').css('height', $(window).height()*0.8);
	});
})