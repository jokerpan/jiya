$(function(){
	$('.service-body>li').hover(function() {
		$(this).children('button').removeClass('btn-default');
		$(this).children('button').addClass('btn-primary');
	}, function() {
		$(this).children('button').removeClass('btn-primary');
		$(this).children('button').addClass('btn-default');
	});


	$('.service-body>li>ul li').hover(function() {
		$(this).append('<div onclick="imgClick()" class="background-color" data-toggle="modal" data-target="#myModal">'
			+'书记画册</div>');
	}, function() {
		$(this).children('div').remove('.background-color');
	});

	$('.contact li:eq(1)').hover(function() {
		$('.qrcode').css('top', ($(window).height()*0.4+76)+'px');
		$('.qrcode').show();
	}, function() {
		$('.qrcode').hide();
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