$(document).ready(function() {

    $('.js nav.main-nav').prepend('<button class="menu-btn">Menu</button>');
    $('.js nav.main-nav ul').addClass('hide');

    $(".menu-btn").click(function() {
        $(".js nav ul").toggleClass('hide');
        $(".menu-btn").toggleClass('close');
    });

    // Modernizer Code
    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    };

    // All PDF's open in new tab
    $(function() { $('a[href$=".pdf"]').prop('target', '_blank'); });

    // All external links open in new window
    if (window.location.host != "app.cloudcannon.com") {
        $('a').each(function() {
            var a = new RegExp('/' + window.location.host + '/');
            if (!a.test(this.href)) {
                $(this).click(function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    window.open(this.href, '_blank');
                });
            }
        });
    }

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    }); 

    // Make sure photos aren't ever stretched
    $('a.gallery').colorbox({
        rel: 'gal',
        maxWidth: '100%',
        width: "auto",
        height: "auto"
    });
  
    //In case of window being resized, close the box, so it can resize on open
    $(window).resize(function() { $.colorbox.close() });
});