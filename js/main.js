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


// JOURNAL PUBLICATIONS SECTION

const journalPublication = [
    {
        id: 1,
        img:"../img/mary's-bk-cover.jpg",
        title: `Udo, U. U., Ukpak, A. A. and Iwot, M. J. (2011)`,
        body: ` Utilization Patterns of Information
        Sources in Pharmacy Library of University of Uyo. Nigerian Journal of Pharmaceutical
        and Applied Science Research, (1). pp 1-11.`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 2,
        img:"../img/mary's-bk-cover.jpg",
        title: `Richard, E. O. and Iwot, M.J. (2016)`,
        body: ` Users’ attitude towards utilization of Library
        Services in Akwa Ibom State University. pp131`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 3,
        img:"../img/mary's-bk-cover.jpg",
        title: `Iwot, M. J. and Ntui, A.I. (2016)`,
        body: ` Acquisition procedures in Nigeria Academic
        Libraries. pp169.`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 4,
        img:"../img/mary's-bk-cover.jpg",
        title: `Alex-Nmecha, J.C and Bassey, M.M. (2017)`,
        body: ` Strategies for successful Networkingin Libraries. In International Journal of Applied Technologies in Library &
        Information Management. (3) 2, 78-84.`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 5,
        img:"../img/mary's-bk-cover.jpg",
        title: `David-West, B. T., and Bassey, M.M. (2017)`,
        body: ` Advocacy for school libraries in Nigeria. In
        International journal of Scientific Research in Education.10 (4)373- 378.`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 6,
        img:"../img/mary's-bk-cover.jpg",
        title: `Bassey, M. M. (2018) `,
        body: `influence of cloud computing in knowledge management among
        universities libraries in Akwa Ibom State, Nigeria, in Librarianship in Africa, Journal of
        Library and Information Science, vol. 16 (1&2) December 2018.`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 7,
        img:"../img/mary's-bk-cover.jpg",
        title: `Shaibu Leonard and Mary Mfon Bassey (2017)`,
        body: ` Managing ICT for Effective Secondary
        School students’ academic performance and sustainable development in Kogi state
        education zone. In international Journal of the Forum for African Women Educationalists,
        Vol. 5 No.4,`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 8,
        img:"../img/mary's-bk-cover.jpg",
        title: `Bassey, Mary Mfon (2018) `,
        body: `Women and Libraries in Promotion of National Integration
        for Development. In International Journal of the Forum for African Women
        Educationalists, Vol.6 No.3,`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 9,
        img:"../img/mary's-bk-cover.jpg",
        title: `Bassey Mary M., Umofia, Siado M. and Samuel, Uduak, E. (2019)`,
        body: `Repositioning Social
        media usability and English language acquisition among students in Uyo Local
        Government Area of Akwa Ibom State, Nigeria. In African Journal of Education and
        Information Management (AJEIMA) Vol. 17 No. 1.`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 10,
        img:"../img/mary's-bk-cover.jpg",
        title: `Madu Samuel, Ekpo Charles G. and Bassey Mary Mfon (2019)`,
        body: ` Appraisal of the impact of
        lecturing experience and the use of Information and Communication Technology (ICT) on
        environmental education students’ academic achievement in South- East Universities.
        Academic Journal of Research and Development (AJORAD) VOL11. No. 1 Conference
        Edition August 2019.`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 11,
        img:"../img/mary's-bk-cover.jpg",
        title: `Juilet C. Alex Nmecha and Mary Mfon Bassey (2020)`,
        body: `Library Advocacy: A Strategy for
        sustaining library services in the 21” Century. Anthology in library and information science
        a festschrift in honor of professor Blessing Esuru Ahiauzu / edited by Vivien O, Emmanuel,
        Innocent Ordu and Emmanuel Anele. - Owerri: App`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 12,
        img:"../img/mary's-bk-cover.jpg",
        title: `Mary M. Bassey and Margaret Sylvanus Umoh (2021)`,
        body: ` Library roles in e- learning
        through information and communication technology: the prospect and challenges. in
        Library and information science compendium, edited by Ryland k. Fletcher. Germany:
        global academic stars promoters (GASPRO).`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
    {
        id: 13,
        img:"../img/mary's-bk-cover.jpg",
        title: `Konye Cynthia Ikems and Mary Mfon Bassey (2023)`,
        body: ` People’s perception and trust in
        Radio journalism: A Panacea to mitigating of fake news from social media; in universal
        journal of Education, science and Technology. Network of Global who is who in academia,
        United Kingdom. Vol, 5. No.1.`,
        download:` <a class="btn btn-primary  py-6 px-6 mt-2" href="#" download="#">Download <i class="fa fa-download"> </i></a>`
    },
]
const journalComponent = (() => {
    

let innerHtmlEle = document.querySelector(".journal");
let journalContent = ''
journalPublication.map((mapJournal) => {
    const { title, img, body, download } = mapJournal
    journalContent += `
    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item ">
                    <img class="img-fluid rounded" src=${img} alt="">
                        <div class="shadow-sm px-2 py-2 text-center ht">
                        <P class=" ">
                            <p class="text-dark fw-bolder m-0">${title}</p>
                           <p class="m-0 sm-text-lg"> ${body}</p> 
                           <p>${download}</p>
                        </P>
                    </div>
                    </div>
                </div>
                
    `
    innerHtmlEle.innerHTML = journalContent
})
})
journalComponent()




