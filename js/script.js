


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

    //NAVIGATE THROUGH CAROUSEL
    $('.next-slide').on('click', function () {
        nextSlide();
    })
    $('.prev-slide').on('click', function () {
        prevSlide();
    })

    //SET SLIDE INDEX TO 1
    let slideIndex = 1;
    showSlide(slideIndex);

    //ADD ONE TO SLIDE INDEX
    function nextSlide() {
        showSlide(slideIndex += 1)
    }
    //SUBTRACT ONE FROM SLIDE INDEX
    function prevSlide() {
        showSlide(slideIndex -= 1)
    }

    //SHOW SLIDE BASED ON CURRENT SLIDE INDEX
    function showSlide(n) {
        let i;
        //create an array out of the carousel slides
        let slidesArray = document.getElementsByClassName('work-display-flex');
        //if the argument passed into the function is greater than the number of slides, reset the carousel to the first slide
        if (n > slidesArray.length) {
            slideIndex = 1;
        }
        //if the argument goes below zero, set the slide index to the last slide
        if (n < 0) {
            slideIndex = slides.length;
        }
        //for each of the slides in the array set display to none
        for (i = 0; i < slidesArray.length; i++) {
            slidesArray[i].style.display = "none";
        }
        // show the slide that is minus one of the slide index (because arrays are zero indexed)
        slidesArray[slideIndex - 1].style.display = "flex";
    }

    //code adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp
})