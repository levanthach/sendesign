$('.owl-carousel.owl-slider').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    animateOut: 'fadeOut',
    autoplay: true,
    nav:false,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    animateOut: 'fadeOut',
    autoplay: true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// scroll top
$(document).ready(function(){
    var typed = new Typed('#typist-element', {
        strings: ["San Design", "Creative Lover", "Blogger", "Photographer", "Writer"],
        typeSpeed: 150,
        loop:true
    });
    // hide #go-top first
    $("#go-top").hide();
 
    // fade in #go-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 90) {
                $('#go-top').fadeIn();
            } else {
                $('#go-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#go-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

   //tab
    $(".nav-pill a").click(function(){
        $(this).tab('show');
    });

    $(window).on('load', function(event) {
        $('.load').delay(1000).fadeOut('fast');
        $('.loader').delay(500).fadeOut('fast');
    });
 
});
