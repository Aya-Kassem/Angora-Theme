
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
            document.getElementById('navbar').style.backgroundColor="rgb(255, 255, 255)";
            document.getElementById('navbar').classList.add('myNav');
            document.getElementById('logo-light').style.display = 'none';
            document.getElementById('logo-dark').style.display = 'block';
            
        }
        else {
            document.getElementById('navbar').style.backgroundColor="initial";
            document.getElementById('navbar').classList.remove('myNav');
            document.getElementById('logo-light').style.display = 'block';
            document.getElementById('logo-dark').style.display = 'none';
        }
    });
});

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


