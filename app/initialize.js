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


