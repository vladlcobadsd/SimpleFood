$(function () {

  $('.reviews-slider__wrapper').slick({
    infinite: false,

    prevArrow: '<button class="reviews-slider__arrow reviews-slider__arrow--prev"><svg width="20" height="20"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',

    nextArrow: '<button class="reviews-slider__arrow reviews-slider__arrow--next"><svg width="20" height="20"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',

    dots: true

  })
})

var mixer = mixitup('.popular-categories__wrapper');