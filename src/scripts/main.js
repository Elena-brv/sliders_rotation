'use strict';

// eslint-disable-next-line no-undef
const sliderFirst = new Swiper('.slider-1', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-1-button-next',
    prevEl: '.swiper-1-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    360: {
      slidesPerView: 2,
    },

    667: {
      slidesPerView: 3,
    },
  },
});

// eslint-disable-next-line no-undef
const sliderSecond = new Swiper('.slider-2', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-2-button-next',
    prevEl: '.swiper-2-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 30,

  effect: 'coverflow',

  breakpoints: {
    360: {
      slidesPerView: 2,
    },

    667: {
      slidesPerView: 3,
    },
  },
});

// eslint-disable-next-line no-undef
const sliderThird = new Swiper('.slider-3', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-3-button-next',
    prevEl: '.swiper-3-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 40,
  effect: 'coverflow',

  coverflowEffect: {
    rotate: 110,
    slideShadows: false,
    depth: 30,
  },

  breakpoints: {
    360: {
      slidesPerView: 2,
    },

    667: {
      slidesPerView: 3,
    },
  },
});

const addControlforSliderFirst = function() {
  sliderSecond.controller.control = null;
  sliderThird.controller.control = null;
  sliderFirst.controller.control = sliderSecond;
};

const addControlforSliderSecond = function() {
  sliderFirst.controller.control = null;
  sliderThird.controller.control = null;
  sliderSecond.controller.control = sliderThird;
};

const addControlforSliderThird = function() {
  sliderFirst.controller.control = null;
  sliderSecond.controller.control = null;
  sliderThird.controller.control = sliderFirst;
};

document.querySelector('.swiper-1').addEventListener(
  'mouseover', addControlforSliderFirst, { capture: true }
);

document.querySelector('.swiper-2').addEventListener(
  'mouseover', addControlforSliderSecond, { capture: true }
);

document.querySelector('.swiper-3').addEventListener(
  'mouseover', addControlforSliderThird, { capture: true }
);
