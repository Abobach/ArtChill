var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 56,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 700,
});

// var swiper = new Swiper(".mySwiper2", {
//     direction: "vertical",
//     slidesPerView: 2,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });
