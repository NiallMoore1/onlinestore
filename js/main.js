/*first slider*/ 
$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next"
});

/*second slider*/ 
$(".slider-two")
.not(".slick-intialized")
.slick({
    prevArrow:".site-slider-two.prev",
    nextArrow:".site-slider-two.next",
    slidesToShow:5,
    slidesToShow:1
    autoplaySpeed:3000
});