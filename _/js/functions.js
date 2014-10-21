// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

var bottomHeight=0;


function filterPath(string) {
		  return string
		    .replace(/^\//,'')
		    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		    .replace(/\/$/,'');
		  }

function scroller(){
		  var locationPath = filterPath(location.pathname);
		  $('a[href*=#]').each(function() {
		    var thisPath = filterPath(this.pathname) || locationPath;
		    if (  locationPath == thisPath
		    && (location.hostname == this.hostname || !this.hostname)
		    && this.hash.replace(/#/,'') ) {
		      var $target = $(this.hash), target = this.hash;
		      if (target) {
		        var targetOffset = $target.offset().top - $('.front-header .container').height();
		        $(this).click(function(event) {
		          event.preventDefault();
		          $('html, body').animate({scrollTop: targetOffset}, 400, function() {
		            location.hash = target;
		          });
		        });
		      }
		    }
		    });
	}
	

	
scroller();
getBottomSize();
window.onresize = scroller;
window.onresize = bottomHeight;
buttonDetermineFade();
$('.sign-up-button').click(buttonFade);
$('#welcome-title').typeTo("Welcome to Helix");

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);

function buttonFade(){
    $('.sign-up-button').fadeOut(200);
}

function buttonDetermineFade(){
  $(window).scroll(function() {
        if(($(document).scrollTop()) > bottomHeight){
	      buttonFade();
        }
        else{$('.sign-up-button').fadeIn(200); console.log($(document).scrollTop());};
    });
}

function getBottomSize(){
	bottomHeight = $("#sign-up").offset().top;
}
	
	
	