$(document).ready(function() {

	var wheight = $(window).height();

	$('header').css('height', wheight);

	$(window).resize(function() {
		var wheight = $(window).height();
		$('header').css('height', wheight);
	})
	
	});   



