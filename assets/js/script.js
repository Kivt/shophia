$(function() {
	$('.image-desc').hover(function() {
		$(this).prev().css('display', 'none');
	}, function() {
		$(this).prev().css('display', 'block');
	});

	$('#submit').click(function(e) {
		e.preventDefault();
		var email = $('#email');
		var emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
		
		if ( ! emailRegExp.test(email.val())) {
			$('#footer-form').addClass('warning');
		}
	});

	$('#email').click(function() {
		$('#footer-form').removeClass('warning');
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 400) {
			$('.scrollTop').fadeIn();
		} else {
			$('.scrollTop').fadeOut();
		}
	});
	
	$('.scrollTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});