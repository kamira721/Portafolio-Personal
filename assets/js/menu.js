$(document).ready(main);

var contador = 1;

function main() {
    $('.menu_bar').click(function() {
        // $('nav').toggle(); 

        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }

    })

};

$(function() {

    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function() {
                window.location.hash = gato;
            });
        }
    });

    $('[data-toggle="popover"]').popover();

});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).on('click', '.page-scroll a', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
});


$(document).bind('scroll', function(ev) {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $section.offset().top - window.innerHeight;
    if (scrollOffset > containerOffset) {
        loadDaBars();
        // unbind event not to load scrolsl again
        $(document).unbind('scroll');
    }
});