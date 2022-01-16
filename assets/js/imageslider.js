const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
  },
  grabCursor: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  /*navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },*/

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
