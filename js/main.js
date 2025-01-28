(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        // autoplay: true,
        // smartSpeed: 500,
        // dots: false,
        // loop: true,
        // nav : true,
        // navText : [
        //     '<i class="bi bi-arrow-left"></i>',
        //     '<i class="bi bi-arrow-down"></i>'
        // ],
    });


    // attractions carousel
    $(".attractions-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
            1400:{
                items:4
            }
        }
    });

    $(".review-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
            1400:{
                items:4
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);



// document.getElementById('quoteForm').addEventListener('submit', function(e) {
//     // Name validation: Only alphabets
//     const name = document.getElementById('name').value;
//     const nameRegex = /^[A-Za-z\s]+$/;
//     if (!nameRegex.test(name)) {
//         alert('Please enter only alphabets in the Name field.');
//         e.preventDefault(); // Prevent form submission
//         return;
//     }

//     // Phone validation: 10 digits only
//     const phone = document.getElementById('phone').value;
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(phone)) {
//         alert('Please enter a valid 10-digit phone number.');
//         e.preventDefault();
//         return;
//     }

//     // Email validation: Must contain '@'
//     const email = document.getElementById('email').value;
//     if (!email.includes('@')) {
//         alert('Please enter a valid email address.');
//         e.preventDefault();
//         return;
//     }

//     // Service validation: At least one service must be selected
//     const services = document.getElementById('services').value;
//     if (services === "") {
//         alert('Please select a package.');
//         e.preventDefault();
//         return;
//     }

//     // All validations passed, form will submit
// });
