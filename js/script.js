$(document).ready(function() {
 
        function hideMenuLend() {
        $('.hidden-menu--landing').slideUp(0);
        $(".navigation-item__arrow-lend").removeClass("navigation-item__arrow-lend__visible");
        }
        function showMenuLend() {
        $('.hidden-menu--landing').slideDown(0);
        $(".navigation-item__arrow-lend").addClass("navigation-item__arrow-lend__visible");
        }
        function hideMenuPages() {
        $('.hidden-menu--pages').slideUp(0);
        $(".navigation-item__arrow-pages").removeClass("navigation-item__arrow-pages__visible");
        }
        function showMenuPages() {
        $('.hidden-menu--pages').slideDown(0);
        $(".navigation-item__arrow-pages").addClass("navigation-item__arrow-pages__visible");
        }
        $(document).ready(function() {
        $(".navigation-item_menu--landing").on("mouseover", showMenuLend);
        $(".navigation-item_menu--landing").on(" mouseleave", hideMenuLend);
        $(".navigation-item_menu--pages").on("mouseover", showMenuPages);
        $(".navigation-item_menu--pages").on(" mouseleave", hideMenuPages);
        });
    

    var prijectSlider = new Swiper('.project-slider', {
        loop: false,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        navigation: {
            nextEl: '.project__button--next',
            prevEl: '.project__button--prev',
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
            nextEl: '.reviews__button--next',
            prevEl: '.reviews__button--prev',
        },
        slidesPerView: 2,
        
    });
    
    $("#down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#projects").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});