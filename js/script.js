$(document).ready(function () {
    AOS.init();

    //BURGER TOGGLE NAV
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('.header-nav').slideToggle('slow');
        $('.social-nav').slideToggle('slow');
    })

    //SCROLL TO NEXT SECTION
    $('a[href*="#"]').on('click', function () {
        target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, "slow")
    })

    //TOGGLE HEADSHOT/ OSCAR/ HOT SAUCE
    $('#toggle-oscar').hover(function () {
        $('.img-container').find('#oscar').fadeToggle(800);
    })
    $('#toggle-giorgi').hover(function () {
        $('.img-container').find('#giorgi').fadeToggle(800);
    })
})