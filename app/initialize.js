import $ from "jquery"
import slick from 'slick-carousel'

$(document).ready(function($) {

$('.us-social__slider').slick({
    slidesToShow: 1,
    centerMode: true,
    asNavFor: '.us-social__container-1',
    appendArrows: $('.us-social__slider-arrows'),
    prevArrow: '<button id="prev" type="button" class="slider-prev us-social-prev"></button>',
    nextArrow: '<button id="prev" type="button" class="slider-next us-social-next"></button>'

 });

$('.us-social__container-1').slick({
  arrows: false,
  asNavFor: '.us-social__slider',

 });


$('.reviews__slider').slick({
    centerMode: true,
    slidesToShow: 1,
    appendArrows: $('.reviews__slider-arrow'),
    prevArrow: '<button id="prev" type="button" class="slider-prev reviews-prev"></button>',
    nextArrow: '<button id="prev" type="button" class="slider-next reviews-next"></button>'
});


var backgroundUrl = {
  foto1: 'url("./images/big-foto-1.jpg")',
  foto2: 'url("./images/big-foto-2.jpg")',
  foto3: 'url("./images/big-foto-3.jpg")',
  foto4: 'url("./images/big-foto-4.jpg")',
  foto5: 'url("./images/big-foto-5.jpg")',
  foto6: 'url("./images/big-foto-6.jpg")',
  foto7: 'url("./images/big-foto-7.jpg")'
}

var allElements = $('.fotos__wrapper-foto')

for (var i = 0; allElements.length > i; i++) {
    $(allElements[i]).mouseover(function(evt) {

    var elememt = evt.currentTarget;
    var dataEl = $(elememt).attr('data-foto');

    $('.fotos').css('backgroundImage', backgroundUrl[dataEl]);
    $('.fotos').addClass('fotos-bg');
    for (var i = 0; allElements.length > i; i++) {
      $(allElements[i]).css('backgroundImage', 'none');
    }
  });
}

for (var i = 0; allElements.length > i; i++) {
    $(allElements[i]).mouseleave(function(evt) {

  for (var i = 0; allElements.length > i; i++) {
    var element = 'foto' + (i + 1);
    $(allElements[i]).css('backgroundImage', backgroundUrl[element]);
    $('.fotos').removeClass('fotos-bg');
    $('.fotos').css('backgroundImage', 'none');
  }
  });
}


$(window).scroll(function() {

  var elementPosition = ($(".how-work").offset().top) - 350;
  var windowPosition = $(window).scrollTop();


  if (elementPosition < windowPosition) {
    var duration = 500;
      var elements = $('.how-work__item')
      elements.each(function(index) {
        $(this).delay(duration * index).queue(function(){
        $(this).addClass('fadeInUp').dequeue();
       })
    });
  }
});

$('.popup__btn-close').click(function() {
  $('.popup-fotos').addClass('hidden');
})

$('.page-header__btn-gradient').click(function() {
  $('.popup-fotos').removeClass('hidden');
})

var checkBox1 = $('.popup-fotos__checkbox');
checkBox1.change(function() {
  if(checkBox1.prop('checked')) {
    $('.checkbox__circle').animate({"left": "23px"}, "fast", function() {
      $('.checkbox__yes').css("display", "block");
      $('.checkbox__no').css("display", "none");
      $('.popup__btn-1').prop('disabled', false);
      $('.popup__btn-2-gradient').prop('disabled', false);
    });
  } else {
    $('.checkbox__circle').animate({"left": "0"}, "fast", function() {
      $('.checkbox__yes').css("display", "none");
      $('.checkbox__no').css("display", "block");
      $('.popup__btn-1').prop('disabled', true);
      $('.popup__btn-2-gradient').prop('disabled', true);
    });
    };
});

})

