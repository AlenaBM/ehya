$(document).ready(function() {
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
    var reviewsSlider = new Swiper('.reviews-slider', {
        loop: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
    });
    var menuButton = $(".menu-button");
    menuButton.on("click", function() {
        $(".navbar-bottom").toggleClass("navbar-bottom--visible")
    });
    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    var closeModalOverlay = $(".modal__overlay");
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);
    closeModalOverlay.on('click', closeModal);

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible")
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible")
    }
    $('.form').each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Please write your name",
                    minlength: "The name must not be shorter than 2 letters",
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com",
                },
                phone: {
                    required: "Please leave your phone number",
                    minlength: "Please enter your full phone number",
                },
            },
        })
    });
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            var modalOverlay = $(".modal__overlay");
            var modalDialog = $(".modal__dialog");
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible")
        }
    });
    $(document).ready(function() {
        $(".input_num").mask('+7 (000) 000-00-00')
    });
    AOS.init({
        disable: function() {
            var maxWidth = 992;
            return window.innerWidth < maxWidth
        }
    })
});
