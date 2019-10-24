$(document).ready(function() {

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

        } else{
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







    /********** Sticky menu **********/
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() { myFunction() };
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
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

    /* Parallax 
    $('.parallax-window').parallax({imageSrc: 'img/background.jpg'}); */

    /* Resize
    function heightDetect(){
        $(".parallax-window").css("height", $(window).height());    
    }
    heightDetect();
    $(window).resize(function(){
        heightDetect();
    });
    */

    /* Scrool animation
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
    });*/
});