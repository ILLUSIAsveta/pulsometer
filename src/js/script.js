
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
                arrows:false,
                slidesToShow: 2,
                slideToScroll: 1,
                dots: true,
                infinite: true,
                speed: 1200,
                autoplay: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                speed: 1200,
                autoplay: true,
                arrows:false,
                slidesToShow: 2,
                slideToScroll: 1,
                autoplay: true,
                speed: 1200,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                speed: 1200,
                autoplay: true,
                arrows:false,
                slidesToShow: 2,
                slideToScroll: 1,
                autoplay: true,
                speed: 1200,
                
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

      // Добавление имени товара в модальное окно
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
          $('#order .modal__subheading').text($('.catalog-item__subtitle').eq(i).text());
          $('.overflay, #order').fadeIn('slow');
      });
  });
  // Маска ввода телефона
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  // Валидация форм на JS
  function validateForms (form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength:2,
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите наше имя*",
          minlength: jQuery.validator.format("Введите минимум {0} символа!")
        },
        phone: "Пожалуйста, введите ваш номер телефона*",
        email: {
          required: "Пожалуйста, введите адрес почтового ящика*",
          email: "Адрес почтового ящика введен неверно"
        }
      }
    });
  };

  validateForms('#order-form');
  validateForms('#consultation-form');
  validateForms('#myform');


///////////////////////// Отправка формы
$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('#consultation, #order').fadeOut();
    $('.overflay, #thanks').fadeIn('slow');


    $('form').trigger('reset');
  });
  return false;
});


     ///// Scroll//////
  $(window).scroll(function(){

    if ($(this).scrollTop() > 600){
      $('.scrollUp').fadeIn();
    }
    else{
      $('.scrollUp').fadeOut();
    }

  });

  $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  new WOW().init();
});


  

    

     
   


  

 



  
  
  
 

  
 

  
   
  