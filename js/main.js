(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);


// javascript
let scroll_false = false
let W_scroll = document.querySelector('.js-scroll-color');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
        W_scroll.classList.add('css-scrolL-color');
        scroll_false = true
    } else {
        W_scroll.classList.remove('css-scrolL-color')
        scroll_false = false

    }
})

// conference map

const conferencePublication = [
    {
        id: 1,
        title: `peter`,
        body: `hello world`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 2,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 3,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 4,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 5,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 6,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 7,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 8,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 9,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 10,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 11,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 12,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 13,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 14,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 15,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 16,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 17,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 18,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 19,
        title: ``,
        body: ``,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"></i></a>
        `
    },
]


const conferencePublications = () => {
    let conferencePublicationData = document.querySelector('.conferenceEle');
    showConference = ''
    conferencePublication.map((displayConference) => {
        const {  title, body, download } = displayConference;
        showConference += `
                       <div class="m-0  sm-text"> <b>${title}</b><br>
                       ${body}
                       <a href="#">${download} </a>
                       </div>
                       
        `

    })
    conferencePublicationData.innerHTML = showConference;


}
conferencePublications()

