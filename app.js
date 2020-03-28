$(document).ready(function(){
	$(".slider1_part").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		dots : true
	});
});


$(document).ready(function(){
	$(".clients_container").slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 5,
		prevArrow: $(".client_left"),
		nextArrow: $(".client_right"),
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  centerMode: true,
			  centerPadding: '0px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  centerMode: true,
			  centerPadding: '0px',
			  slidesToShow: 1
			}
		  }
		]
	  });
});

//third slider(blog slider)

$(document).ready(function(){
	$(".blog_container").slick({
		infinite: true,
		arrows:false,
		dots : false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow:4,
		centerMode:true,
		centerPadding: '200px'
		// responsive: [
		// 	{
		// 	  breakpoint: 768,
		// 	  settings: {
		// 		arrows: false,
		// 		centerMode: true,
		// 		centerPadding: '40px',
		// 		slidesToShow: 3
		// 	  }
		// 	},
		// 	{
		// 	  breakpoint: 480,
		// 	  settings: {
		// 		arrows: false,
		// 		centerMode: true,
		// 		centerPadding: '40px',
		// 		slidesToShow: 1
		// 	  }
		// 	}
		//   ]
		});
	});
