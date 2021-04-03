$(document).ready(function() {

  
  var navButton = $(".navigation-item_menu--landing");
    navButton.on("click", function() {
        $(".hidden-menu--landing").toggleClass("hidden-menu__visible");
        
    });
    var navButton = $(".navigation-item_menu--pages");
    navButton.on("click", function() {
        $(".hidden-menu--pages").toggleClass("hidden-menu__visible");
        
    });
    

    var prijectSlider = new Swiper('.project-slider', {
        loop: false,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        navigation: {
            nextEl: '.project-slider__button--next',
            prevEl: '.project-slider__button--prev',
        },
        slidesPerView: 3.4,
        
    });
     var reviewSlider = new Swiper('.reviews-slider', {
        loop: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
        slidesPerView: 2,
        
    });

});