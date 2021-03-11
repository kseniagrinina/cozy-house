// import Swiper from "swiper/bundle";
import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger-menu");
  const menu = document.querySelector(".header__menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  const swiper = new Swiper(".swiper-container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  if (module.hot) {
    module.hot.accept();
  }
});
