$("document").ready(function ($) {

    // owl-carousel

    /*------------------------- Home page 1 -------------------------*/

    const $banner = $('.header-bottom__banner'),
        $services = $('.services__items'),
        $testimonials = $(".testimonials__content-carousel"),
        $specialists = $(".specialists__carousel"),
        $latestNews = $(".latest-news__carousel");

    /*------------------------- Home page 2 -------------------------*/

    const $banner2 = $(".header-bottom-2__banner"),
        $otherServices2Card = $(".other-services-2__card > .content > .other-services-2__carousel"),
        $specialists2Carousel = $(".specialists-2__carousel"),
        $ourClientsCarousel = $(".our-clients__carousel"),
        $latestNews2Carousel = $(".latest-news-2__carousel");

    /*------------------------- Home page 3 -------------------------*/

    const $headerBottom3Banner = $(".header-bottom-3__banner"),
        $ourDepartments2Carousel = $(".our-departments-2__carousel"),
        $ourClients2Carousel = $(".our-clients-2__carousel"),
        $specialists3Carousel = $(".specialists-3__carousel"),
        $latestNews3Carousel = $(".latest-news-3__carousel");

    /*------------------------- departments-details_right.html -------------------------*/

    const $doctorsDepartmentCarousel = $(".doctors-department__carousel"),
        $departmentCasesCarousel = $(".container_left-sidebar .department-cases__carousel"),
        $departmentCasesCarousel2 = $(".container_right-sidebar .department-cases__carousel"),
        $departmentCasesCarousel3 = $(".container_no-sidebar .department-cases__carousel");

    /*------------------------- doctors-single_right.html and doctors-single_left.html -------------------------*/

    const $doctorsTestimonialsCarousel = $(".doctors-testimonials__carousel"),
        $relativesCarousel = $(".relatives__carousel");

    /*------------------------- Home page 1 -------------------------*/

    // .header-bottom__banner
    $banner.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 9000,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
            },

            992: {
                dots: true,
            },
        }
    });

    // .services__items
    $services.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true,
            },

            390: {
                dots: true,
                nav: false,
                items: 2,
            },

            768: {
                dots: true,
                nav: false,
                items: 3,
            },

            992: {
                dots: true,
                nav: false,
                items: 4,
            },
        }
    });

    // .testimonials__content-carousel
    $testimonials.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        margin: 100,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            560: {
                items: 1,
            },

            840: {
                items: 1,
            },

            1200: {
                items: 1,
            },
        }
    });

    // .specialists__carousel
    $specialists.owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true,
                margin: 10,
            },

            768: {
                items: 2,
                dots: true,
                nav: false,
            },

            992: {
                items: 3,
                dots: true,
                nav: false,
                margin: false,
            },

            1200: {
                items: 4,
                dots: true,
                nav: false,
                margin: 20,
            },
        }
    });

    // .latest-news__carousel
    $latestNews.owlCarousel({
        loop: true,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true,
                margin: 10,
            },
            
            768: {
                items: 2,
                dots: true,
                nav: false,
            },
            
            992: {
                items: 3,
                dots: true,
                nav: false,
                margin: false,
            },

            1200: {
                items: 3,
                dots: true,
                nav: false,
                margin: 30,
            },
        }
    });
    
    /*------------------------- Home page 2 -------------------------*/

    // .header-bottom__banner-2
    $banner2.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                nav: false,
                dots: false,
            },
            1200: {
                nav: true,
                dots: true,
            },
        }
    });

    // .other-services-2__card > .content > .carousel
    $otherServices2Card.owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
                nav: false,
                items: 1,
            },

            600: {
                dots: false,
                nav: false,
                items: 2,
            },

            900: {
                dots: false,
                nav: false,
                items: 3,
            },


            1200: {
                items: 1,
                dots: false,
                nav: false,
            },
        }
    });

    // .specialists-2__carousel 
    $specialists2Carousel.owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: true,
                items: 1,
            },

            767: {
                dots: true,
                items: 2,
            },

            1200: {
                items: 1,
                dots: true,
            },
        }
    })

    // .our-clients__carousel
    $ourClientsCarousel.owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: true,
        items: 1,
        margin: 50,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: true,
                nav: false,
                items: 1,
            },

            1200: {
                items: 1,
                dots: true,
                nav: true,
            },
        }
    })

    // .lates-news-2__carousel
    $latestNews2Carousel.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
                items: 1,
                margin: 20,
                nav: true,
            },

            768: {
                dots: true,
                items: 2,
                margin: 20,
            },
        }
    });

    /*------------------------- Home page 3 -------------------------*/

    // .header-bottom-3__banner
    $headerBottom3Banner.owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: false,
    });

    // .our-departments-2__items
    $ourDepartments2Carousel.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        items: 4,
        // autoWidth: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
                nav: true,
                items: 1,
            },

            420: {
                dots: false,
                nav: true,
                items: 2,
            },

            768: {
                items: 3,
                dots: true,
                nav: false,
            },

            900: {
                items: 4,
                dots: true,
                nav: false,
            },

            1300: {
                items: 4,
                dots: true,
                nav: true,
            },

        }
    });

    // .our-clients-3__carousel
    $ourClients2Carousel.owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        mouseDrag: false,
    });

    // .specialists-3__carousel
    $specialists3Carousel.owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true,
                margin: 10,
            },

            620: {
                items: 2,
                dots: true,
                nav: false,
            },

            920: {
                items: 3,
                dots: true,
                nav: false,
            },

            1200: {
                items: 4,
                dots: true,
                nav: false,
            },
            
            1300: {
                nav: true,
            }
        }
    });

    // .lates-news-3__carousel
    $latestNews3Carousel.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                nav: true,
                dots: false,
                items: 1,
                margin: 20,
            },

            768: {
                nav: false,
                dots: true,
                items: 2,
                margin: 20,
            },
            1300: {
                items: 2,
                nav: true,
                dots: true,
            }
        }
    });

    /*------------------------- departments-details_right.html -------------------------*/

    // .doctors-department__carousel
    $doctorsDepartmentCarousel.owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 50,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        mouseDrag: false,
    });

    //  .department-cases__carousel
    $departmentCasesCarousel.owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            570: {
                items: 2,
                dots: false,
            },
            870: {
                items: 3,
            },
        }
    });

    $departmentCasesCarousel2.owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            570: {
                items: 2,
                dots: false,
            },
            870: {
                items: 3,
            },
        }
    });

    // .container_no-sidebar => .department-cases__carousel 4 items
    $departmentCasesCarousel3.owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            570: {
                items: 2,
                dots: false,
            },
            870: {
                items: 3,
                dots: false,
            },
            1200: {
                items: 4,
            }
        }
    });


    /*------------------------- doctors-single_right.html and doctors-single_left.html -------------------------*/
    $doctorsTestimonialsCarousel.owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 30,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
    });


    // Product Carousel Slider
    if ($('.shop .image-carousel').length && $('.shop .thumbs-carousel').length) {

        var $sync1 = $(".shop .image-carousel"),
            $sync2 = $(".shop .thumbs-carousel"),
            flag = false,
            duration = 1000;

        $sync1
            .owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                nav: false,
                navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
                dots: false,
                autoplay: true,
                autoplayTimeout: 10000
            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = false;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                loop: true,
                margin: 20,
                items: 1,
                nav: true,
                navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
                dots: false,
                center: false,
                autoplay: true,
                autoplayTimeout: 10000,
                responsive: {
                    0: {
                        items: 2,
                        autoWidth: false
                    },
                    350: {
                        items: 3,
                        autoWidth: false
                    },
                    550: {
                        items: 4,
                        autoWidth: false
                    }
                },
            })

            .on('click', '.owl-item', function () {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

    }

    // shop single product
    $relativesCarousel.owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        dots: false,
        center: false,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1,
                nav: false,
                autoWidth: false,
            },
            550: {
                items: 2,
                nav: false,
                autoWidth: false,
            },
            840: {
                items: 3,
                nav: false,
                autoWidth: false,
            },
            1200: {
                items: 4,
                nav: true,
                autoWidth: false,
            },
        }
    });

    $(".img-mobile__carousel").owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        margin: 10,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        mouseDrag: true,
    })
})