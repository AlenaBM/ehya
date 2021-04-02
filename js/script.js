$(document).ready(function() {

  
  var navButton = $(".navigation-item_menu--landing");
    navButton.on("click", function() {
        $(".hidden-menu--landing").toggleClass("hidden-menu__visible");
        
    });
    var navButton = $(".navigation-item_menu--pages");
    navButton.on("click", function() {
        $(".hidden-menu--pages").toggleClass("hidden-menu__visible");
        
    });
    

    var hotelSlider = new Swiper('.hotel-slider', {
        loop: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
    });

});