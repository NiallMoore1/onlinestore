const breakpoint=[{
    breakpoint:1280,
    settings:{
      slidesToShow:4  
    }
},
{
    breakpoint:1009,
    settings:{
        slidesToShow:3
    }
},
{
    breakpoint:720,
    settings:{
        slidesToShow:2
    }
},
{
    breakpoint:460,
    settings:{
        slidesToShow:1
    }
},
]


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
    slidesToScroll:1,
    autoplaySpeed:3000,
    responsive:breakpoint
});

/*third slider*/ 
$(".slider-three")
.not(".slick-intialized")
.slick({
    prevArrow:".site-slider-three.prev",
    nextArrow:".site-slider-three.next",
    slidesToShow:4,
    slidesToScroll:1,
    autoplaySpeed:3000,
    infinite:false,
    responsive:breakpoint
});

/*fourth slider*/ 
$(".slider-four")
.not(".slick-intialized")
.slick({
    prevArrow:".site-slider-four.prev",
    nextArrow:".site-slider-four.next",
    slidesToShow:4,
    slidesToScroll:1,
    autoplaySpeed:3000,
    infinite:false,
    responsive:breakpoint
});

/*five slider*/ 
$(".slider-five")
.not(".slick-intialized")
.slick({
    prevArrow:"slider-brand.prev",
    nextArrow:".slider-brand .next",
    slidesToShow:6,
    slidesToScroll:1,
    autoplaySpeed:3000,
    infinite:true,
    responsive:breakpoint
});

/*six slider*/ 
$(".slider-six")
.not(".slick-intialized")
.slick({
    prevArrow:"",
    nextArrow:"",
    autoplaySpeed:3000,
    infinite:true,
    autoplay:true,
    dots:true
});



