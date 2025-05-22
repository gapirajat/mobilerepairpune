

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top a').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('.triBar').click(function() {
        $('body').addClass('showNav');
        return false;
    });
    $('.navOverlay, .hideNav').click(function() {
        $('body').removeClass('showNav');
        return false;
    });


});
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('header').addClass('header_fixer');
        $('.header_spacer').css({
            'display': 'block'
        })
    } else {
        $('header').removeClass('header_fixer');
        $('.header_spacer').css({
            'display': 'none'
        })
    }
})


$(document).ready(function(){
  $(".mycity").click(function(){
    $("#city").toggle();
  });
});


//**************owl-slider********************


$(document).ready(function() {
    var owl = $('.loop');
    owl.owlCarousel({
        stagePadding: 0,
        margin: 30,
        nav: false,
        loop: true,
		 dots: false,
        autoplay: true,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },

            600: {
                items: 4
            },
            768: {
                items: 4
            },
            980: {
                items: 6
            },
            1152: {
                items: 6
            },
            1240: {
                items:6
            }
        }
    })
});


