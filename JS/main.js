// GLOBAL VARIABLES.....................
let windowScroll, sectionLocation, counterLocation,currentSection,section,link;

$(window).on('scroll', function() {
    windowScroll = $(this).scrollTop();
    sectionLocation = $("#about").offset().top;
    counterLocation = $(".counters").offset().top;
    // NAVBAR ON SCROLL ............
    if(windowScroll > 150){
        $('#navbar').css({'background-color': 'rgb(255, 255, 255)','position': 'fixed'}).addClass('myNav');
        $('#logo-light').css('display', 'none');
        $('#logo-dark').css('display', 'block')
    }else{
        $('#navbar').css('background-color', 'initial').removeClass('myNav');
        $('#logo-light').css('display', 'block');
        $('#logo-dark').css('display', 'none')
    }
    // ANIMATE PROGRESS BAR ................
    if(windowScroll >= sectionLocation - 150 ){
        $(":root").css('--progress-animate', 'bar-animate 1s forwards');
        $('.percent').each(function() {
            $(this).css('animation', 'percent 1s .9s forwards')
        })
    }
    // COUNTERS ANIMATION.................
    if(windowScroll >= counterLocation - 400){
        countingAnimate(".counter-one", 0, "#counter-one", 0, 123)
        countingAnimate(".counter-two", '.2s', "#counter-two", 150, 582 )
        countingAnimate(".counter-three",'.4s',"#counter-three", 0, 170 )
        countingAnimate(".counter-four",'.6s',"#counter-four", 100, 426)
    }

    // ACTIVATE NAV LINKS ON SCROLL ....
    $('section').each( function(){
        section = $(this);
        sectionLocation = section.offset().top;
        if( windowScroll >= sectionLocation - 150){
            currentSection = section.attr('id');
        }
    })

    $('.navbar li a').each(function() {
        currentLink = $(this);
        if(currentLink.attr('href').includes(currentSection)){
            $('.navbar li a.active').removeClass('active');
            currentLink.addClass('active');
        };
    })
});

// NAVBAR LINKS ON CLICK ......
$('.navbar li a').each(function(){
    $(this).on('click', function(e){
        $('.navbar li a.active').removeClass('active');
        $(this).addClass('active');
        
        e.preventDefault();
        linkId = $(this).attr('href');
        section = $(linkId)
        sectionLocation = $(section).offset().top;
        $('html, body').animate(   {scrollTop: sectionLocation}, '1000');
    })
    
});


// BACK TO TOP BUTTON ..........
$('#back-btn').click(function(e){
    e.preventDefault();
    $('html, body').animate(   {scrollTop: 0}, '600');
});

// COUNTING FUNCTION............
function countingAnimate(parent, delay, countElement, from, to){
    parent = $(parent);
    parent.css({'transform': 'translateY(0)', 'transition': 'transform .3s ease', 'transition-delay': `${delay}`})


    setTimeout(() => {
        $(countElement).counter({ 
            countFrom: from,
            countTo: to
        })
    }, 200)
}

// MAIN CAROUSEL
$(".items-wrapper").slick({
    dots: false,
    arrows: true,
    Infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: "<a class='prev-arrow'> <i class='fa fa-chevron-right' aria-hidden='true'></i> </a>",
    nextArrow: "<a class='next-arrow'> <i class='fa fa-chevron-left' aria-hidden='true'></i> </a>"
});

// THEME OPTIONS SECTION...............
$("#setting-container").click(function(){
    let leftValue = $(".theme-options").css("left");

    if( leftValue == "0px" ){
        $(".theme-options").animate({left : "-265px"}, 1000);
    }else{
        $(".theme-options").animate({left : "0"}, 1000);
    }
})

// GET COLORS FROM THE COLORS OPTIONS...............
$(".colors-options span").click(function(){
    let colorChange = $(this).css('background-color');
    let root = $(":root");
    root.css('--main-color', colorChange);
})

// OPENING VIDEO..........
$('.play-btn').on('click', () => {
    $('#myVideo').css('display', 'block')
    $('#body-bg').css('display', 'block')
})
// CLOSING VIDEO..........
$('#closeBtn').on('click', () => {
    $('#myVideo').css('display', 'none')
    $('#body-bg').css('display', 'none')
})

// CLIENT`S REVIEW CAROUSEL 
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
            centerMode: true
        }
        }
    ]
    });
    $(".slider-nav a").click(function(e){
    e.preventDefault();
    slideIndex = $(this).index();
    $( '.slider-for' ).slickGoTo( parseInt(slideIndex),false );
});


// COMPAINES SECTION ...................
$('.companies-wrapper').slick({
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        infinite: false,
        dots: false
      }
    }
  ]
});


