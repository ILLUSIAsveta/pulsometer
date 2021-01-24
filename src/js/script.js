
$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slideToScroll: 1,
        arrows:true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                  
                  dots: true,
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              },
        ]
        
    });
  });