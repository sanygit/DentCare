$(".fa-navicon").click(function(){
    $("nav ul").slideToggle(500);
});

$('#slider-first.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false, 
    smartSpeed: 1300,
    navText:["<span class='fas fa-chevron-left'></span>", "<span class='fas fa-chevron-right'></span>"],
    autoplay:true,
    autoplayTimeout:5000,
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
});

$('#slider-two.owl-carousel').owlCarousel({
    loop:true,
    margin:45,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:6000,
    smartSpeed: 1300,
    navText:["<span class='bi bi-arrow-left'<span>" ,"<span class='bi bi-arrow-right' <span>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },

        800:{
            items:2
        },


        1000:{
            items:2
        }
    }
})

$('#slider-three.owl-carousel').owlCarousel({
    loop:true,
    margin:45,
    nav:true,
    autoplayTimeout:7000,
    dots:false,
    autoplay:true,
    smartSpeed: 1300,
    navText:["<span class='bi bi-arrow-left'<span>" ,"<span class='bi bi-arrow-right' <span>"],
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

 
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });

    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


   

        
    