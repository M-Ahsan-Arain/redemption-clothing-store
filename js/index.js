// blogslider start
$('.testi-slider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 519,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    }],
});