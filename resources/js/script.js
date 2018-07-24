$(document).ready(function() {
	/* Sticky Navigation */
	$('.js-section_features').waypoint(function(direction) {
		if(direction == 'down') {
			$('nav').addClass('sticky');
		}
		else {
			$('nav').removeClass('sticky');
		}
	  }, 
	    {
		offset: '90px;'
    });

	/* Scrolling Buttons */
	$('.js-scroll-to-plans').click(function() {
		$('html, body').animate({scrollTop: $('.js-section_plans').offset().top}, 1000);
	});
	$('.js-scroll-to-start').click(function () {
		$('html, body').animate({scrollTop: $('.js-section_features').offset().top}, 1000);
	}); 

	/* Smooth scrolling*/
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
        	var target = $(this.hash);
        	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        	if (target.length) {
        	    $('html,body').animate({scrollTop: target.offset().top}, 1000);
            	return false;
    	    }
	    }
	});
});

	/*$(document).on('click', 'a[href^="#"]', function (event) {
    	event.preventDefault();
    	$('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top}, 1000);
	});*/

	/* Animation */
	$('.js-wp-1').waypoint(function() {
		$('.js-wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	$('.js-wp-2').waypoint(function() {
		$('.js-wp-2').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});

	$('.js-wp-3').waypoint(function() {
		$('.js-wp-3').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	$('.js-wp-4').waypoint(function() {
		$('.js-wp-4').addClass('animated pulse');
	}, {
		offset: '50%'
	});

	/* Mobile Navi */ 
	$('.js_nav_icon').click(function() {
		var nav = $('.js_main_nav');
		var icon = $('.js_nav_icon i');
		nav.slideToggle(500);
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});


});  