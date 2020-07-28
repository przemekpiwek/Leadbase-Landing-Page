import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 1200,
  loop: true,
  scrollbarHide: true,
  touchMoveStopPropagation: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  controlBy: "slide",
  paginationHiddenClass: "swiper-pagination-hidden",
  a11y: true,
  prevSlideMessage: "Previous slide",
  nextSlideMessage: "Next slide",
  firstSlideMessage: "This is the first slide",
  lastSlideMessage: "This is the last slide",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-new",
    prevEl: ".swiper-button-prev-new",
  },
});
