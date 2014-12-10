var $win = $(window);
var $sun = $('.sun');
var $introBG = $('.intro-bg');
var $dipperSection = $('.dipper-section');
var $shuttle = $('.shuttle');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$introBG.css('background-position', 'center ' +scrollPos / 2 + 'px');
});


$(document).ready(function() {
  $('.background-image').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });
});


  $(window).scroll(function() {
    $('#slidein').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass("slideRight");
      }
    });
  });

  $('#slidein').click(function() {
    $(this).addClass("slideRight");
  });


  $(window).scroll(function() {
    $('#slideleft').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass("slideLeft");
      }
    });
  });

  $('#slideleft').click(function() {
    $(this).addClass("slideLeft");
  });


	$(window).scroll(function() {
		$('#appearin').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("fadeIn");
			}
		});
	});

