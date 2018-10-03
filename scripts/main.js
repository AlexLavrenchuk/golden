
$(document).ready(function(){
  
	$('.team-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<i class="fas fa-angle-left left-arrow"></i>',
		nextArrow: '<i class="fas fa-angle-right right-arrow"></i>',
		dots: true,
	  	dotsClass: "my-dots",

	  	 responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
	});
});

$('.hamburger').click(function() {
	$('.nav').toggle();
});