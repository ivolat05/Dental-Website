$(function(){
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu').toggleClass('menu__active'),
            $('.header__page').toggleClass('header__page-active')
    });
    $('.speak__slaider').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 3,
        centerPadding: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 760,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
]
    });
    $('.slick__wrap').slick({
        arrows: false,
        dots: true
    });
});