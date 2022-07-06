new Swiper('.slider__container',{
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    loop: true,
    speed: 600,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
    },
    scrollbar: {
        el: '',
        draggable: true,
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    breakpoints: {

    }
});