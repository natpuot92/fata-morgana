import $ from "jquery"
import slick from 'slick-carousel'
import validation from 'jquery-validation'

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
  $('.popup-review').addClass('hidden');
  $('.popup-ask').addClass('hidden');
  $("html,body").css("overflow","auto");
})

$('.page-header__phone-btn').click(function(evt) {
  evt.preventDefault();
  $('.popup-fotos').removeClass('hidden');

  $("html,body").css("overflow","hidden");

//function OffScroll () {
//  var winScrollTop = $(window).scrollTop();
//  $(window).bind('scroll',function () {
//
//    $(window).scrollTop(winScrollTop);
//  });}
//
//
//  OffScroll ();  //Запустили отмену прокрутки
//$(window).unbind('scroll'); //Выключить отмену прокрутки
});

$('.overlay').click(function(evt) {
  if ($(evt.target).closest('.popup__container').length == 0) {
    $('.popup-ask').addClass('hidden');
    $('.popup-fotos').addClass('hidden');
    $('.popup-review').addClass('hidden');
    $("html,body").css("overflow","auto");
  }
})


$('.popup-btn__close-ask').click(function() {
  $('.popup-ask').addClass('hidden');
  $("html,body").css("overflow","auto");
});

$('.page-footer-btn').click(function(evt) {
  evt.preventDefault();
  $('.popup-fotos').removeClass('hidden');

  $("html,body").css("overflow","hidden");
});

var checkBox1 = $('#popup-fotos__checkbox');
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

var checkBox2 = $('#popup-ask__checkbox');
checkBox2.change(function() {
  if(checkBox2.prop('checked')) {
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

  var checkBox3 = $('#popup-review__checkbox');
checkBox3.change(function() {
  if(checkBox3.prop('checked')) {
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

});


$('.services__video').mouseover(function() {
  document.querySelector('.video-services').play();
  $('.services__video').css('background-image', 'none');
})

$('.services__video').mouseleave(function() {
  document.querySelector('.video-services').pause();
})

$("#popup-review__form").validate({
  rules: {
    review__name: {
    required: true
  },
    review__area: {
      required: true
  },
    popup_review__checkbox: {
      required: true
    }
  },
  messages: {
    review__name: {
      required: 'укажите ваше имя'
    },
    review__area: {
      required: 'введите ваше сообщение'
    }
  },

  submitHandler: function(form) {

  }
})

$("#popup-fotos__form").validate({
  rules: {
    fotos__name: {
      required: true
  },
    fotos__tel: {
      required: true,
      digits: true
    },
    fotos__email: {
      required: true,
      email: true
    },
    fotos__area: {
      required: true
  },
    popup_review__checkbox: {
      required: true
    }
  },
  messages: {
    fotos__name: {
      required: 'укажите ваше имя'
    },
    fotos__tel: {
      required: 'укажите ваш телефон',
      digits: 'только цифры'
    },
    fotos__email: {
      required: 'укажите ваш email',
      email: 'некорректрый email'
    },
    fotos__area: {
      required: 'введите ваше сообщение'
    }
  },
  submitHandler: function(form) {

  }
})

$("#popup-ask__form").validate({
  rules: {
    ask__name: {
      required: true
  },
    ask__tel: {
      required: true,
      digits: true
    },
    ask__email: {
      required: true,
      email: true
    },
    ask__area: {
      required: true
  },
    popup_review__checkbox: {
      required: true
    }
  },
  messages: {
    ask__name: {
      required: 'укажите ваше имя'
    },
    ask__tel: {
      required: 'укажите ваш телефон',
      digits: 'только цифры'
    },
    ask__email: {
      required: 'укажите ваш email',
      email: 'некорректрый email'
    },
    ask__area: {
      required: 'введите ваше сообщение'
    }
  },
  submitHandler: function(form) {

  }
})


    window.initMap = function() {
        var place = {lat: 47.225190, lng: 39.662033};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: place,
          styles: [
      {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "100"
            },
            {
                "lightness": "-23"
            },
            {
                "weight": "1.15"
            },
            {
                "gamma": "1.30"
            }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "gamma": "1.00"
            }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "gamma": "1.41"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry",
        "stylers": [
            {
                "gamma": "1.52"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "-20"
            },
            {
                "gamma": "1.30"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "63"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": "0.63"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "28"
            },
            {
                "visibility": "simplified"
            },
            {
                "gamma": "0.67"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
            ]
            }
      ]
        });
        var imageMarker = 'images/label.png'
        var marker = new google.maps.Marker({
          position: place,
          map: map,
          icon: imageMarker
        });
      }


