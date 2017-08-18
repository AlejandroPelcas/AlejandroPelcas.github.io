$(document).ready(function() {
	$('.projects-all').hide();
	$('.projects-all').fadeIn(100);
	$('.projects-all').mouseenter(function() {
		$('.projects-all').fadeTo('slow',1);
	});
	$('.projects-all').mouseleave(function() {
		$('.projects-all').fadeTo('slow',.95);
	});
});
