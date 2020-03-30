//header_slider
$(document).ready(function(){
	$(".slider1_part").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		dots : true
	});
});


//client slider

$(document).ready(function(){
	$(".clients_container").slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 5,
		prevArrow: $(".client_left"),
		nextArrow: $(".client_right"),
		responsive: [
			{
				breakpoint :1124,
				settings:{
					slidesToShow:3
				}
			},
		  {
			breakpoint: 768,
			settings: {
			  centerMode: true,
			  centerPadding: '0px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 621,
			settings: {
			  centerMode: true,
			  centerPadding: '0px',
			  slidesToShow: 1,
			  slidesToScroll:1,
			  dots:true,
			  arrows:false
			}
		  }
		]
	  });
});

//(blog slider)

$(document).ready(function(){
	$(".blog_container").slick({
		infinite: true,
		arrows:false,
		dots : false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow:4,
		centerMode:true,
		centerPadding: '200px',
		responsive: [
			{
			  breakpoint: 1124,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '100px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint:620,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			  }
			}
		  ]
		});
	});

//courses slider

$(window).on("resize", function() {
    if( $(this).width() < 620 ) {
        $(document).ready(function(){
			$(".courses_container").slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:false,
				dots : true
			});
		});
	}
	else if($(window).width() > 620){
		return false;
	}
});


//teachers slider

$(window).on("resize", function() {
    if( $(this).width() < 620 ) {
        $(document).ready(function(){
			$(".teachers_container").slick({
				centerMode: true,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:false,
				dots : true
			});
		});
	}
}).trigger("resize");


const hamburger = document.querySelector('.first_header i')
const pop = document.querySelector('.list_pop')
const x = document.querySelector('.list_pop i');
const a = document.querySelector('.list_pop ul');
const body = document.querySelector("body");

hamburger.addEventListener("click", function(){
	pop.style.height = '100vh';
	pop.style.transition = ' height 800ms ease-out';
	a.style.display='block';
	x.style.display='block';
	body.style.overflow='hidden';
});

x.addEventListener("click", function(){
	pop.style.height = '0vh';
	a.style.display='none';
	x.style.display='none';
	body.style.overflow='unset';
});
