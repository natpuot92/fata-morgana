import $ from "jquery"
import slick from 'slick-carousel'

 $('.us-social__slider').slick({
    slidesToShow: 1,
    fade: true,
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

$('.popup__slids').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: true,
    appendArrows: $('.popup-slider__arrows'),
    prevArrow: '<button id="prev" type="button" class="btn section3-btn-prev popup-slider-prev"><span class = "section3-btn-prev-text popup__slider-prev-text">Назад</span><div class="section3-btn-prev-arrow"></div></button>',
    nextArrow: '<button id="next" type="button" class="btn section3-btn-next popup-slider-next"><span class = "section3-btn-next-text popup__slider-next-text">Вперед</span><div class="section3-btn-next-arrow"></div></button>'
  });
