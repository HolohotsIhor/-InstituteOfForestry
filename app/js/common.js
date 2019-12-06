$(document).ready(function() {
    /********** Map **********/
    $('.marker-box .marker-item').mouseover(function(){
        $('.list-box li a, .list-box li a span, .list-box ul li .numb').css('opacity', '.5');
    })
    .mouseout(function() {
        $('.list-box li a, .list-box li a span, .list-box ul li .numb').css('opacity', '1');
    });

    $('.marker-box .marker-item:nth-child(1)').mouseover(function(){
        $('.list-box li:nth-child(1) a, .list-box li:nth-child(1) a span, .list-box ul li:nth-child(1) .numb').css('opacity', '1');
        $('.list-box li:nth-child(1)').css('margin-left', '0');
        $('.list-box li:nth-child(1)').css('padding-right', '30px');
    })
    .mouseout(function() {
        $('.list-box li:nth-child(1)').css('margin-left', '30px');
        $('.list-box li:nth-child(1)').css('padding-right', '0');
    });

    $('.marker-box .marker-item:nth-child(2)').mouseover(function(){
        $('.list-box li:nth-child(2) a, .list-box li:nth-child(2) a span, .list-box ul li:nth-child(2) .numb').css('opacity', '1');
        $('.list-box li:nth-child(2)').css('margin-left', '0');
        $('.list-box li:nth-child(2)').css('padding-right', '30px');
    })
    .mouseout(function() {
        $('.list-box li:nth-child(2)').css('margin-left', '30px');
        $('.list-box li:nth-child(2)').css('padding-right', '0');
    });

    $('.marker-box .marker-item:nth-child(3)').mouseover(function(){
        $('.list-box li:nth-child(3) a, .list-box li:nth-child(3) a span, .list-box ul li:nth-child(3) .numb').css('opacity', '1');
        $('.list-box li:nth-child(3)').css('margin-left', '0');
        $('.list-box li:nth-child(3)').css('padding-right', '30px');
    })
    .mouseout(function() {
        $('.list-box li:nth-child(3)').css('margin-left', '30px');
        $('.list-box li:nth-child(3)').css('padding-right', '0');
    });

    $('.marker-box .marker-item:nth-child(4)').mouseover(function(){
        $('.list-box li:nth-child(4) a, .list-box li:nth-child(4) a span, .list-box ul li:nth-child(4) .numb').css('opacity', '1');
        $('.list-box li:nth-child(4)').css('margin-left', '0');
        $('.list-box li:nth-child(4)').css('padding-right', '30px');
    })
    .mouseout(function() {
        $('.list-box li:nth-child(4)').css('margin-left', '30px');
        $('.list-box li:nth-child(4)').css('padding-right', '0');
    });

    $('.marker-box .marker-item:nth-child(5)').mouseover(function(){
        $('.list-box li:nth-child(5) a, .list-box li:nth-child(5) a span, .list-box ul li:nth-child(5) .numb').css('opacity', '1');
        $('.list-box li:nth-child(5)').css('margin-left', '0');
        $('.list-box li:nth-child(5)').css('padding-right', '30px');
    })
    .mouseout(function() {
        $('.list-box li:nth-child(5)').css('margin-left', '30px');
        $('.list-box li:nth-child(5)').css('padding-right', '0');
    });

    $('.marker-box .marker-item:nth-child(6)').mouseover(function(){
        $('.list-box li:nth-child(6) a, .list-box li:nth-child(6) a span, .list-box ul li:nth-child(6) .numb').css('opacity', '1');
        $('.list-box li:nth-child(6)').css('margin-left', '0');
        $('.list-box li:nth-child(6)').css('padding-right', '30px');
    })
    .mouseout(function() {
        $('.list-box li:nth-child(6)').css('margin-left', '30px');
        $('.list-box li:nth-child(6)').css('padding-right', '0');
    });

    $('.marker-box .marker-item:nth-child(7)').mouseover(function(){
        $('.list-box li:nth-child(7) a, .list-box li:nth-child(7) a span, .list-box ul li:nth-child(7) .numb').css('opacity', '1');
        $('.list-box li:nth-child(7)').css('margin-left', '0');
        $('.list-box li:nth-child(7)').css('padding-right', '30px');
    })
    .mouseout(function() {
        $('.list-box li:nth-child(7)').css('margin-left', '30px');
        $('.list-box li:nth-child(7)').css('padding-right', '0');
    });



    $('.list-box ul li').mouseover(function(){
        $('.marker-box .marker-item').css('background-image', 'url("http://my-sitetest.xyz/institut/wp-content/themes/institut/img/map-pointer-hover.png")');
    })
    .mouseout(function() {
        $('.marker-box .marker-item').css('background-image', 'url("http://my-sitetest.xyz/institut/wp-content/themes/institut/img/map-pointer.png")');
    });

    $('.list-box ul li:nth-child(1)').mouseover(function(){
        $('.marker-box .marker-item:nth-child(1)').css('background-image', 'url("http://my-sitetest.xyz/institut/wp-content/themes/institut/img/map-pointer.png")');
    });

    $('.list-box ul li:nth-child(2)').mouseover(function(){
        $('.marker-box .marker-item:nth-child(2)').css('background-image', 'url("http://my-sitetest.xyz/institut/wp-content/themes/institut/img/map-pointer.png")');
    });

    $('.list-box ul li:nth-child(3)').mouseover(function(){
        $('.marker-box .marker-item:nth-child(3)').css('background-image', 'url("http://my-sitetest.xyz/institut/wp-content/themes/institut/img/map-pointer.png")');
    });

    $('.list-box ul li:nth-child(4)').mouseover(function(){
        $('.marker-box .marker-item:nth-child(4)').css('background-image', 'url("http://my-sitetest.xyz/institut/wp-content/themes/institut/img/map-pointer.png")');
    });

    $('.list-box ul li:nth-child(5)').mouseover(function(){
        $('.marker-box .marker-item:nth-child(5)').css('background-image', 'url("http://my-sitetest.xyz/institut/wp-content/themes/institut/img/map-pointer.png")');
    });

    $('.list-box ul li:nth-child(6)').mouseover(function(){
        $('.marker-box .marker-item:nth-child(6)').css('background-image', 'url("http://my-sitetest.xyz/institut/wp-content/themes/institut/img/map-pointer.png")');
    });

    $('.list-box ul li:nth-child(7)').mouseover(function(){
        $('.marker-box .marker-item:nth-child(7)').css('background-image', 'url("http://my-sitetest.xyz/institut/wp-content/themes/institut/img/map-pointer.png")');
    });

    /********** Burger **********/
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    });

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(100);
            $(".top_mnu").css("left", "-100%");
            $(".top_mnu li a").removeClass("fadeIn animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(100);
            $(".top_mnu").css("left", "0");
            $(".top_mnu li a").addClass("fadeIn animated");
        };
    });

    $('.top_mnu .menu-item-has-children').append('<div class="open-inner"></div>');
    $(".open-inner").click(function() {
        if ($(".top_mnu .sub-menu").is(":visible")) {
            $(this).parent().removeClass("open");

        } else {
            $(this).parent().addClass("open");
            $(".top_mnu .sub-menu").addClass("fadeIn animated");
        }
    });


    /********** Search panel **********/
    $(".modal-search").click(function() {
        $(".modal-window-search").css("display", "block");
        $(".modal-window-search").css("visibility", "visible");
        $(".modal-window-search").addClass("fadeIn animated");
    });
    $(".toggle_mnu_search").click(function() {
        $(".modal-window-search").css("display", "none");
        $(".modal-window-search").css("visibility", "hidden");
    });

    /************** Slider ***************/
    $('.carousel').carousel({
        interval: 8000
    })

    /********** Sticky menu **********/
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() { myFunction() };
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Проверка при перезагрузке странице в уже опущенном положении (дописано)
    if (window.pageYOffset > sticky) {
        navbar.classList.remove("no-sticky");
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("no-sticky");
    }
    // Проверка при перезагрузке странице в уже опущенном положении (дописано)
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.remove("no-sticky");
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
            navbar.classList.add("no-sticky");
        }
    }

    /************ Scrool animation ************/
    $(window).scroll(function() {

        $('.mov').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeIn animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-left').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInLeft animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-right').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInRight animated');
                $(this).css('opacity', '1');
            }
        });
    });

    /********************** OWL carousel ***************/
    var owl = $('.carousel-one');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    /////////////////////////
    var owl = $('.carousel-two');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            960: {
                items: 6
            },
            1200: {
                items: 6
            }
        }
    });

    /////////////////////////
    var owl = $('.carousel-three');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            960: {
                items: 6
            },
            1200: {
                items: 6
            }
        }
    });

    //////////// Скролл при наведении мышки
    // owl.on('mousewheel', '.owl-stage', function(e) {
    //     if (e.deltaY > 0) {
    //         owl.trigger('next.owl');
    //     } else {
    //         owl.trigger('prev.owl');
    //     }
    //     e.preventDefault();
    // });

    /*********** Scrool to top ************/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    /*********** Gallery contoller ************/
    $('.fg-item').addClass('fadeInUp animated');
    $('.gallery-filter li').click(function() {
        $('.gallery-filter li').removeClass("active");
        $(this).addClass('active');
    });

    $('.gallery-filter li:nth-child(1)').click(function() {
     $('.fg-item').css('display', 'none');
     setTimeout(function () {
        $('.fg-item').css('display', 'inline-block');
    }, 20);
     $('.fg-item:nth-child(1)').parent().parent().css('animation-delay', '.1s');
     $('.fg-item:nth-child(2)').parent().parent().css('animation-delay', '.2s');
     $('.fg-item:nth-child(3)').parent().parent().css('animation-delay', '.3s');
     $('.fg-item:nth-child(4)').parent().parent().css('animation-delay', '.4s');
     $('.fg-item:nth-child(5)').parent().parent().css('animation-delay', '.5s');
     $('.fg-item:nth-child(6)').parent().parent().css('animation-delay', '.6s');
     $('.fg-item:nth-child(7)').parent().parent().css('animation-delay', '.7s');
     $('.fg-item:nth-child(8)').parent().parent().css('animation-delay', '.8s');
     $('.fg-item:nth-child(9)').parent().parent().css('animation-delay', '.9s');
     $('.fg-item:nth-child(10)').parent().parent().css('animation-delay', '1s');
 });

    $('.gallery-filter li:nth-child(2)').click(function() {
        $('.fg-item').css('display', 'none');
        setTimeout(function () {
            $('.group-1').parent().parent().css('display', 'inline-block');
        }, 20);
        $('.group-1:nth-child(1)').parent().parent().css('animation-delay', '.1s');
        $('.group-1:nth-child(2)').parent().parent().css('animation-delay', '.2s');
        $('.group-1:nth-child(3)').parent().parent().css('animation-delay', '.3s');
        $('.group-1:nth-child(4)').parent().parent().css('animation-delay', '.4s');
        $('.group-1:nth-child(5)').parent().parent().css('animation-delay', '.5s');
        $('.group-1:nth-child(6)').parent().parent().css('animation-delay', '.6s');
        $('.group-1:nth-child(7)').parent().parent().css('animation-delay', '.7s');
        $('.group-1:nth-child(8)').parent().parent().css('animation-delay', '.8s');
        $('.group-1:nth-child(9)').parent().parent().css('animation-delay', '.9s');
        $('.group-1:nth-child(10)').parent().parent().css('animation-delay', '1s');
    });

    $('.gallery-filter li:nth-child(3)').click(function() {
        $('.fg-item').css('display', 'none');
        setTimeout(function () {
            $('.group-2').parent().parent().css('display', 'inline-block');
        }, 20);
        $('.group-2:nth-child(1)').parent().parent().css('animation-delay', '.1s');
        $('.group-2:nth-child(2)').parent().parent().css('animation-delay', '.2s');
        $('.group-2:nth-child(3)').parent().parent().css('animation-delay', '.3s');
        $('.group-2:nth-child(4)').parent().parent().css('animation-delay', '.4s');
        $('.group-2:nth-child(5)').parent().parent().css('animation-delay', '.5s');
        $('.group-2:nth-child(6)').parent().parent().css('animation-delay', '.6s');
        $('.group-2:nth-child(7)').parent().parent().css('animation-delay', '.7s');
        $('.group-2:nth-child(8)').parent().parent().css('animation-delay', '.8s');
        $('.group-2:nth-child(9)').parent().parent().css('animation-delay', '.9s');
        $('.group-2:nth-child(10)').parent().parent().css('animation-delay', '1s');
    });

    $('.gallery-filter li:nth-child(4)').click(function() {
        $('.fg-item').css('display', 'none');
        setTimeout(function () {
            $('.group-3').parent().parent().css('display', 'inline-block');
        }, 20);
        $('.group-3:nth-child(1)').parent().parent().css('animation-delay', '.1s');
        $('.group-3:nth-child(2)').parent().parent().css('animation-delay', '.2s');
        $('.group-3:nth-child(3)').parent().parent().css('animation-delay', '.3s');
        $('.group-3:nth-child(4)').parent().parent().css('animation-delay', '.4s');
        $('.group-3:nth-child(5)').parent().parent().css('animation-delay', '.5s');
        $('.group-3:nth-child(6)').parent().parent().css('animation-delay', '.6s');
        $('.group-3:nth-child(7)').parent().parent().css('animation-delay', '.7s');
        $('.group-3:nth-child(8)').parent().parent().css('animation-delay', '.8s');
        $('.group-3:nth-child(9)').parent().parent().css('animation-delay', '.9s');
        $('.group-3:nth-child(10)').parent().parent().css('animation-delay', '1s');
    });

    $('.gallery-filter li:nth-child(5)').click(function() {
        $('.fg-item').css('display', 'none');
        setTimeout(function () {
            $('.group-4').parent().parent().css('display', 'inline-block');
        }, 20);
        $('.group-4:nth-child(1)').parent().parent().css('animation-delay', '.1s');
        $('.group-4:nth-child(2)').parent().parent().css('animation-delay', '.2s');
        $('.group-4:nth-child(3)').parent().parent().css('animation-delay', '.3s');
        $('.group-4:nth-child(4)').parent().parent().css('animation-delay', '.4s');
        $('.group-4:nth-child(5)').parent().parent().css('animation-delay', '.5s');
        $('.group-4:nth-child(6)').parent().parent().css('animation-delay', '.6s');
        $('.group-4:nth-child(7)').parent().parent().css('animation-delay', '.7s');
        $('.group-4:nth-child(8)').parent().parent().css('animation-delay', '.8s');
        $('.group-4:nth-child(9)').parent().parent().css('animation-delay', '.9s');
        $('.group-4:nth-child(10)').parent().parent().css('animation-delay', '1s');
    });

    $('.gallery-filter li:nth-child(6)').click(function() {
        $('.fg-item').css('display', 'none');
        setTimeout(function () {
            $('.group-5').parent().parent().css('display', 'inline-block');
        }, 20);
        $('.group-5:nth-child(1)').parent().parent().css('animation-delay', '.1s');
        $('.group-5:nth-child(2)').parent().parent().css('animation-delay', '.2s');
        $('.group-5:nth-child(3)').parent().parent().css('animation-delay', '.3s');
        $('.group-5:nth-child(4)').parent().parent().css('animation-delay', '.4s');
        $('.group-5:nth-child(5)').parent().parent().css('animation-delay', '.5s');
        $('.group-5:nth-child(6)').parent().parent().css('animation-delay', '.6s');
        $('.group-5:nth-child(7)').parent().parent().css('animation-delay', '.7s');
        $('.group-5:nth-child(8)').parent().parent().css('animation-delay', '.8s');
        $('.group-5:nth-child(9)').parent().parent().css('animation-delay', '.9s');
        $('.group-5:nth-child(10)').parent().parent().css('animation-delay', '1s');
    });

    $('.gallery-filter li:nth-child(7)').click(function() {
        $('.fg-item').css('display', 'none');
        setTimeout(function () {
            $('.group-6').parent().parent().css('display', 'inline-block');
        }, 20);
        $('.group-6:nth-child(1)').parent().parent().css('animation-delay', '.1s');
        $('.group-6:nth-child(2)').parent().parent().css('animation-delay', '.2s');
        $('.group-6:nth-child(3)').parent().parent().css('animation-delay', '.3s');
        $('.group-6:nth-child(4)').parent().parent().css('animation-delay', '.4s');
        $('.group-6:nth-child(5)').parent().parent().css('animation-delay', '.5s');
        $('.group-6:nth-child(6)').parent().parent().css('animation-delay', '.6s');
        $('.group-6:nth-child(7)').parent().parent().css('animation-delay', '.7s');
        $('.group-6:nth-child(8)').parent().parent().css('animation-delay', '.8s');
        $('.group-6:nth-child(9)').parent().parent().css('animation-delay', '.9s');
        $('.group-6:nth-child(10)').parent().parent().css('animation-delay', '1s');
    });

    $('.gallery-filter li:nth-child(8)').click(function() {
        $('.fg-item').css('display', 'none');
        setTimeout(function () {
            $('.group-7').parent().parent().css('display', 'inline-block');
        }, 20);
        $('.group-7:nth-child(1)').parent().parent().css('animation-delay', '.1s');
        $('.group-7:nth-child(2)').parent().parent().css('animation-delay', '.2s');
        $('.group-7:nth-child(3)').parent().parent().css('animation-delay', '.3s');
        $('.group-7:nth-child(4)').parent().parent().css('animation-delay', '.4s');
        $('.group-7:nth-child(5)').parent().parent().css('animation-delay', '.5s');
        $('.group-7:nth-child(6)').parent().parent().css('animation-delay', '.6s');
        $('.group-7:nth-child(7)').parent().parent().css('animation-delay', '.7s');
        $('.group-7:nth-child(8)').parent().parent().css('animation-delay', '.8s');
        $('.group-7:nth-child(9)').parent().parent().css('animation-delay', '.9s');
        $('.group-7:nth-child(10)').parent().parent().css('animation-delay', '1s');
    });

    /* Accordion settings*/
    var $active = true;

    $('.panel-title > a').click(function(e) {
        e.preventDefault();
    });

    $('.collapse-init').on('click', function() {
        if(!$active) {
          $active = true;
          $('.panel-title > a').attr('data-toggle', 'collapse');
          $('.panel-collapse').collapse({'toggle': true, 'parent': '#accordion'});
          $(this).html('Click to disable accordion behavior');
      } else {
          $active = false;
          $('.panel-collapse').collapse({'toggle': true, 'parent': '#accordion'});
          $('.panel-title > a').removeAttr('data-toggle');
          $(this).html('Click to enable accordion behavior');
      }
  });
});






/* Filter logic */
jQuery(function($){
    $('#filter').submit(function(){
        var filter = $('#filter');
        $.ajax({
            url:filter.attr('action'),
            data:filter.serialize(), // form data
            type:filter.attr('method'), // POST
            beforeSend:function(xhr){
                filter.find('button').text('Поиск публикаций...'); // changing the button label
            },
            success:function(data){
                filter.find('button').text('Применить фильтр'); // changing the button label back
                $('#response').html(data); // insert data
            }
        });
        return false;
    });
});

