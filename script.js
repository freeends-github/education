// Scroll to top

mybutton = document.querySelector(".up-btn");

// When the user scrolls down 20px from the top of the document, show the button
scrollFunction();
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.visibility = "hidden";
        mybutton.style.opacity = "0";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Testimonials slider
$(document).ready(function() {
    $(".slider").slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

// Blog slider
$('.blog-items').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});
    // On init
    $(".blog-items .slick-slide[data-slick-index='-3']").css("opacity", ".5");
    $(".blog-items .slick-slide[data-slick-index='2']").css("opacity", ".5");
    // On before slide change
    $('.blog-items').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".blog-items .slick-slide").css("opacity", "1");
        $(".blog-items .slick-slide[data-slick-index='" + (nextSlide - 3) + "']").css("opacity", ".5");
        $(".blog-items .slick-slide[data-slick-index='" + (nextSlide + 2) + "']").css("opacity", ".5");
    });
});
// Navbar toggler
$(".toggler").on("click", function() {
    $(this).toggleClass("open");
    $("body").toggleClass("navbar-open");
});
$(".nav-links a").on("click", function() {
    if($("body").hasClass("navbar-open")) {
      $(".toggler").removeClass("open");
      $("body").removeClass("navbar-open");
    }
});

