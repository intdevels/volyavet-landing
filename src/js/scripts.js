@@include('./libs/swiper.js')

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 25,
    pagination: {
        el: ".slider-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const reviews = new Swiper(".reviews", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
        el: ".slider-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const teams = new Swiper(".teams", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
        el: ".slider-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
