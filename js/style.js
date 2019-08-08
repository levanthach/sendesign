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
    $(".nav-tabs li").click(function(){
        $(this).tab('show');
    });
 
});