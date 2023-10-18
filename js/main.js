// Banner
$(".wrap_banner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,  
  dots: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// -------------------------------------------

// Banner
$(".amslider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  dots: false,
  // autoplay: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// -------------------( SATISFIED CUSTOMERS )------------------------

// Banner

$(".seti_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  // autoplay: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//
// -------------------( Evanto Slider )------------------------

$(".evanto_inner").owlCarousel({
  nav:false,
  loop: true,
  dots: false,
  pagination: false,
  margin: 25,
  autoHeight: false,
  stagePadding: 50,
  responsiveClass: true,
  responsive: {
    0: {
      items: 6,      
    },
    576: {
      items: 3,
      nav: false,
    },
    768: {
      items: 8,
      nav: false,
    },
    991: {
      items: 5,
      nav: false,
    },
    1299: {
      items: 5,
      nav: false,
    },
    1400: {
      items: 6,      
    },
  },
});


// // -------------------( Header sticky )------------------------

$(window).scroll(function(){
  if ($(this).scrollTop() > 1) {
      $('header').addClass('header_fixed');
  } else {
      $('header').removeClass('header_fixed');
  }
});

// ================= bottom to top 

var scrollbtn = $('#scrollButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    scrollbtn.addClass('scrollShow');
  } else {
    scrollbtn.removeClass('scrollShow');
  }
});

scrollbtn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



