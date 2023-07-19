$(function () {

  $(document).ready(function () {
    var sliderInitialized = false;

    function initSlick() {
      $('.sales__inner-list').slick({
        dots: true,
        arrows: false
      });
      sliderInitialized = true;
    }

    function destroySlick() {
      $('.sales__inner-list').slick('unslick');
      sliderInitialized = false;
    }

    function checkScreenSize() {
      var screenWidth = $(window).width();
      if (screenWidth <= 768 && !sliderInitialized) {
        initSlick();
      } else if (screenWidth > 768 && sliderInitialized) {
        destroySlick();
      }
    }

    $(window).resize(function () {
      checkScreenSize();
    });

    // Проверяем ширину экрана при загрузке страницы
    checkScreenSize();
  });

  $(document).ready(function () {
    var sliderInitialized = false;

    function initSlick() {
      $('.restaurants__list').slick({
        dots: true,
        arrows: false
      });
      sliderInitialized = true;
    }

    function destroySlick() {
      $('.restaurants__list').slick('unslick');
      sliderInitialized = false;
    }

    function checkScreenSize() {
      var screenWidth = $(window).width();
      if (screenWidth <= 768 && !sliderInitialized) {
        initSlick();
      } else if (screenWidth > 768 && sliderInitialized) {
        destroySlick();
      }
    }

    $(window).resize(function () {
      checkScreenSize();
    });

    // Проверяем ширину экрана при загрузке страницы
    checkScreenSize();
  });


  // $(document).ready(function () {
  //   $(window).resize(function () {
  //     var screenWidth = $(window).width();
  //     if (screenWidth <= 768) {
  //       $('.sales__inner-list').slick({
  //         dots: true,
  //         arrows: false
  //       })
  //     } else {
  //       $('.sales__inner-list').slick('unslick');
  //     }
  //   });
  // });

  // $('.sales__inner-list').slick({
  //   dots: true,
  //   arrows: false,
  //   // autoplay: true,
  //   // autoplaySpeed: 3000
  // })

  $('.catalog-top__select').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    step: 10,
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })

  $('.reviews-slider__wrapper').slick({
    infinite: false,

    prevArrow: '<button class="reviews-slider__arrow reviews-slider__arrow--prev"><svg width="20" height="20"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',

    nextArrow: '<button class="reviews-slider__arrow reviews-slider__arrow--next"><svg width="20" height="20"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',

    dots: true

  })

  $(".product__rating").rateYo({
    starWidth: "16px",
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',
    readOnly: true,
  });
})

$('.product__slider-inner').slick({
  infinite: true,

  prevArrow: '<button class="product__arrow product__arrow-prev" type="button"><svg width = "40" height = "40"><use xlink: href = "images/sprite.svg#icon-left"></use></svg></button>',

  nextArrow: '<button class="product__arrow product__arrow-next" type="button"><svg width = "40" height = "40"><use xlink: href = "images/sprite.svg#icon-right"></use></svg></button>',
})


const burger = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const bodyLock = document.querySelector('body');
const closeBtn = document.querySelector('.mobile-menu__close');
const bodyShadow = document.querySelector('.overlay');
const catalogBtn = document.querySelector('.catalog-top__svg');
const catalogMenu = document.querySelector('.catalog__filters');
const catalogCloseBtn = document.querySelector('.catalog__close');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('menu--active');
  if (mobileMenu.classList.contains('menu--active')) {
    bodyLock.classList.add('lock');
    bodyShadow.classList.add('overlay--shadow');
  } else {
    burger.classList.remove('burger--active');
    bodyLock.classList.remove('lock');
    bodyShadow.classList.remove('overlay--shadow');
  }
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('menu--active');
  bodyShadow.classList.remove('overlay--shadow');
  bodyLock.classList.remove('lock');
});

catalogBtn.addEventListener('click', () => {
  catalogMenu.classList.add('active');
  bodyShadow.classList.add('overlay--shadow');
  bodyLock.classList.add('lock');
});

catalogCloseBtn.addEventListener('click', () => {
  catalogMenu.classList.remove('active');
  bodyShadow.classList.remove('overlay--shadow');
  bodyLock.classList.remove('lock');
});

$(function () {

  $('.restaurants__list').slick({
    infinite: false,

    dots: true,

    arrows: false

  })
})

// $(document).ready(function () {
//   $('.triage').click(function () {
//     $('.catalog__nav').toggleClass('catalog--open');
//     $('body').toggleClass('lock');
//   });
//   $('.close-button').on('click', function () {
//     $('.catalog__nav').removeClass('catalog--open');
//     $('body').removeClass('lock');
//   });
// });

var mixer = mixitup('.popular-categories__wrapper');