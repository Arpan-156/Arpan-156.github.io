$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Front-End Designer", "Photographer", "Freelancer", "Graphics Designer", "Digital Marketeer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Photographer", "Front-End Designer", "Freelancer", "Graphics Designer", "Digital Marketeer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



// $(document).on('click', '.nav-menu a, .scrollto', function(e) {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       e.preventDefault();
//       var target = $(this.hash);
//       if (target.length) {

//         var scrollto = target.offset().top;

//         $('html, body').animate({
//           scrollTop: scrollto
//         }, 1500, 'easeInOutExpo');

//         if ($(this).parents('.nav-menu, .mobile-nav').length) {
//           $('.nav-menu .active, .mobile-nav .active').removeClass('active');
//           $(this).closest('li').addClass('active');
//         }

//         if ($('body').hasClass('mobile-nav-active')) {
//           $('body').removeClass('mobile-nav-active');
//           $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//         }
//         return false;
//       }
//     }
//   });

  
//   $(document).ready(function() {
//     if (window.location.hash) {
//       var initial_nav = window.location.hash;
//       if ($(initial_nav).length) {
//         var scrollto = $(initial_nav).offset().top;
//         $('html, body').animate({
//           scrollTop: scrollto
//         }, 1500, 'easeInOutExpo');
//       }
//     }
//   });

//   $(document).on('click', '.mobile-nav-toggle', function(e) {
//     $('body').toggleClass('mobile-nav-active');
//     $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//   });

//   $(document).click(function(e) {
//     var container = $(".mobile-nav-toggle");
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//       if ($('body').hasClass('mobile-nav-active')) {
//         $('body').removeClass('mobile-nav-active');
//         $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//       }
//     }
//   });
