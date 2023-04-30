/*********************** Serices Scetion ***********************/

$(function () {
    new WOW().init();
})

/*********************** Work Scetion ***********************/

$(function () {
    $("#work").magnificPopup({
        delegate: 'a', //child item selecter, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    })
})

/*********************** Team Scetion ***********************/

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: false,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });
});

/*********************** Stats Scetion ***********************/


$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*********************** Team Scetion ***********************/

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    transitionStyle : "ease-in",
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });
});


/*********************** Navigation Scetion ***********************/
//Show & Hide navigation bg

$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav-bg
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show nav-bg
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });

});

// smooth scrolling

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // get/return id like #about, #team & etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// close mobile menu on click

$(function () {
    $(".navbar-collapse ul li a").on("click touch", function(){
        
        $(".navbar-toggler").click();
    });
});

/*********************** Product page ***********************/

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

































