
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
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:true,
              }
            },
        ]
        
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass
        ('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    $('.catalog-item__link').each(function(i) {
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })

    $('.catalog-item__back').each(function(i) {
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })

    // Modal
    $('[data-modal=consultation]').on('click', function() {
      $('.overflay, #consultation ').fadeIn('slow')}
      );
    
    $('.modal__close').on('click', function(){
      $('.overflay, #order, #consultation, #thanks').fadeOut('slow')
    });  


    $('.button_mini').on('click', function() {
      $('.overflay, #order').fadeIn('slow')
    });

   
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
          $('#order .modal__subheading').text($('.catalog-item__subtitle').eq(i).text());
          $('.overflay, #order').fadeIn('slow');
      });
  });
  });