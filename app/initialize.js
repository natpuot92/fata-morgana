import $ from "jquery"
import slick from 'slick-carousel'

 $('.us-social__slider').slick({
    slidesToShow: 1,
    centerMode: true,
    appendArrows: $('.us-social__slider-arrows'),
    prevArrow: '<button id="prev" type="button" class="slider-prev us-social-prev"></button>',
    nextArrow: '<button id="prev" type="button" class="slider-next us-social-next"></button>'

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
    console.log(i);
    $(allElements[i]).css('backgroundImage', backgroundUrl[element]);
    $('.fotos').removeClass('fotos-bg');
    $('.fotos').css('backgroundImage', 'none');
  }
  });
}


