
//sticky footer
$(document).ready(function() {
	$(window).scroll(function() {
		var height = $(window).scrollTop();
   if($(window).scrollTop() + $(window).height() + $(document).height() - 90) {
       $('#footer').css('position', 'sticky', 'bottom', '0px');

		} else {
			$('#footer').css('position', 'relative');
		
   		}
	});


//#navbar

	$(window).on('scroll', function() {
		var y = $(window).scrollTop();
		if (y > 1) {
			$('#navbar').addClass('fixedNav');
		} if(y < 1) {
			$('#navbar').removeClass('fixedNav');
		}
	});	


//setings for menu on small screens

	$('.hamb').on('click', function() {
		$('#wrapNav').addClass('colapseNav').removeClass('hideNav');
		$('.hamb').fadeOut(200);
		$('.x-icon').fadeIn(200);		
	});



	$('.x-icon').on('click', function() {
		$('#wrapNav').addClass('hideNav').removeClass('colapseNav');
		$('.x-icon').fadeOut(200);
		$('.hamb').fadeIn(200);		
	});


//Slider


  $('.slider').slick({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    cssEase: 'ease-in-out',
    mobileFirst: true,
    pauseOnHover: true
  });



/*Dropdown menu*/

	$('.wrapOfBtn').on('mouseleave', function() {
		$('.dropdown').fadeOut(200);
	});
	
	$('.wrapOfBtn').on('mouseover', function() {
		$('.dropdown').fadeIn(200);
	});
});





  