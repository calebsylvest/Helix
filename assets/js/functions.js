// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// listen for click of email signup button
		$('#email-button').click(function() {
			$('#email-button').addClass("active");
			$('#mc-embedded-subscribe').addClass("show");
			$(this).attr('placeholder','Email Address...');
		});

		/*$('.bold-button').click(function() {
			$(this).toggleClass("active");
			$('.example-highlight').addClass("bold");			
		});*/

		$('.bold-button').click(function() {
			$('.bold-button').toggleClass("active");
			$('.example-highlight').toggleClass("bold");			
		});

		$('.italic-button').click(function() {
			$('.italic-button').toggleClass("active");
			$('.example-highlight').toggleClass("italic");
		});

		$('.underline-button').click(function() {
			$('.underline-button').toggleClass("active");
			$('.example-highlight').toggleClass("underline");
		});
	
	});

})(window.jQuery);