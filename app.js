$(document).ready(function(){
	$(".slider1_part").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		dots : true
	});
});


// $(document).ready(function(){
// 	$(".clients_container").slick({
// 		centerMode: true,
// 		infinite:true,
// 		centerPadding: '60px',
// 		slidesToShow: 3,
// 		prevArrow: $(".client_left"),
// 		nextArrow: $(".client_right"),
// 		responsive: [
// 		  {
// 			breakpoint: 768,
// 			settings: {
// 			  arrows: false,
// 			  centerMode: true,
// 			  centerPadding: '40px',
// 			  slidesToShow: 3
// 			}
// 		  },
// 		  {
// 			breakpoint: 480,
// 			settings: {
// 			  arrows: false,
// 			  centerMode: true,
// 			  centerPadding: '40px',
// 			  slidesToShow: 1
// 			}
// 		  }
// 		]
// 	  });
// });