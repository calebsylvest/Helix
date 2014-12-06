// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// listen for click of email signup button
		$('.email-signup-button').click(function() {
			$('.email-signup-button').addClass("active");
			$('.email-signup-submit').addClass("show");
			$(this).attr('placeholder','Email Address...');
		});

		// faux tooltip menu
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